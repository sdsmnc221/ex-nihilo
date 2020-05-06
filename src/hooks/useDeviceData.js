import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contacts from 'react-native-contacts';
import SmsAndroid from 'react-native-get-sms-android';
import CameraRoll from '@react-native-community/cameraroll';
import RNCalendarEvents from 'react-native-calendar-events';

import {
	getDeviceContactsStart,
	getDeviceContactsFailure,
	getDeviceContactsSuccess,
	setDeviceContacts,
	getDeviceSmsStart,
	getDeviceSmsSuccess,
	setDeviceSms,
	getDeviceGalleryStart,
	setDeviceGallery,
	getDeviceGalleryFailure,
} from 'states/actions/deviceDataActions';

const useDeviceData = (defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	const { permissions } = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		if (permissions.requested) {
			// Retrieve Device Contacts
			getDeviceContactsStart(dispatch);
			Contacts.getAllWithoutPhotos((err, deviceContacts) => {
				if (err === 'denied') {
					getDeviceContactsFailure(dispatch);
				} else {
					getDeviceContactsSuccess(dispatch);
					setDeviceContacts(dispatch, deviceContacts);
					setContacts((prevContacts) => [...prevContacts, ...deviceContacts]);
				}
			});

			// Retrieve Device SMS
			getDeviceSmsStart(dispatch);
			SmsAndroid.list(
				JSON.stringify({
					box: '',
				}),
				(error) => {
					getDeviceContactsFailure(dispatch);
					console.log(error);
				},
				(count, smsList) => {
					getDeviceSmsSuccess(dispatch);
					setDeviceSms(dispatch, count, JSON.parse(smsList));
				}
			);

			// Retrieve Photos from Camera Roll
			(async () => {
				try {
					getDeviceGalleryStart(dispatch);

					const albums = await CameraRoll.getAlbums();
					const count = albums
						.map((a) => a.count)
						.reduce((prev, current) => prev + current);
					const photos = await CameraRoll.getPhotos({
						first: count,
						assetType: 'All',
					});

					setDeviceGallery(dispatch, count, albums, photos);
				} catch (error) {
					getDeviceGalleryFailure(dispatch);
					console.log(error);
				}
			})();

			// Retrieve Calendar Events
			RNCalendarEvents.authorizeEventStore().then((r) => {
				console.log(r);
				RNCalendarEvents.findCalendars().then((r) => console.log(r));
			});
		}
	}, [permissions.requested, dispatch]);

	return contacts;
};

export default useDeviceData;
