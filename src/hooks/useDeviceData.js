import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contacts from 'react-native-contacts';
import SmsAndroid from 'react-native-get-sms-android';

import {
	getDeviceContactsStart,
	getDeviceContactsFailure,
	getDeviceContactsSuccess,
	setDeviceContacts,
	getDeviceSmsStart,
	getDeviceSmsSuccess,
	setDeviceSms,
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
		}
	}, [permissions.requested]);

	return contacts;
};

export default useDeviceData;
