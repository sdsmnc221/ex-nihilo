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
	getDeviceSmsFailure,
	setDeviceSms,
	getDeviceGalleryStart,
	getDeviceGallerySuccess,
	getDeviceGalleryFailure,
	setDeviceGallery,
	getDeviceCalendarStart,
	getDeviceCalendarSuccess,
	getDeviceCalendarFailure,
	setDeviceCalendar,
} from 'states/actions/deviceDataActions';

const useDeviceData = (defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	const { permissions } = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		if (permissions.requested) {
			// Retrieve Device Contacts
			getDeviceContactsStart(dispatch);
			Contacts.getAllWithoutPhotos((error, deviceContacts) => {
				if (error !== 'denied') {
					getDeviceContactsSuccess(dispatch);
					setDeviceContacts(dispatch, deviceContacts);
					setContacts((prevContacts) => [...prevContacts, ...deviceContacts]);
				} else {
					getDeviceContactsFailure(dispatch);
				}
			});

			// Retrieve Device SMS
			getDeviceSmsStart(dispatch);
			SmsAndroid.list(
				JSON.stringify({
					box: '',
				}),
				(error) => {
					getDeviceSmsFailure(dispatch);
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

					getDeviceGallerySuccess(dispatch);
					setDeviceGallery(dispatch, count, albums, photos);
				} catch (error) {
					getDeviceGalleryFailure(dispatch);
					console.log(error);
				}
			})();

			// Retrieve Calendar Events
			(async () => {
				try {
					getDeviceCalendarStart(dispatch);
					const authorizeStatus = await RNCalendarEvents.authorizeEventStore();

					if (authorizeStatus === 'authorized') {
						const calendars = await RNCalendarEvents.findCalendars();
						const events = await RNCalendarEvents.fetchAllEvents(
							new Date(1970, 0, 1, 0, 0, 0).toISOString(), // from the start of time
							new Date(2020, 11, 31, 24, 0, 0).toISOString() // to the end of this year 2020
						);

						getDeviceCalendarSuccess(dispatch);
						setDeviceCalendar(dispatch, calendars, events);
					} else {
						getDeviceCalendarFailure(dispatch);
					}
				} catch (error) {
					getDeviceCalendarFailure(dispatch);
					console.log(error);
				}
			})();
		}
	}, [permissions.requested, dispatch]);

	return contacts;
};

export default useDeviceData;
