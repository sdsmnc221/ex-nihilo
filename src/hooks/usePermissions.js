import { useState, useEffect } from 'react';
import {
	request,
	requestMultiple,
	openSettings,
	PERMISSIONS,
} from 'react-native-permissions';
import Contacts from 'react-native-contacts';

const {
	READ_CONTACTS,
	READ_SMS,
	READ_CALENDAR,
	CAMERA,
	ACCESS_COARSE_LOCATION,
	ACCESS_FINE_LOCATION,
	ACCESS_BACKGROUND_LOCATION,
	READ_EXTERNAL_STORAGE,
	READ_PHONE_NUMBERS,
	READ_PHONE_STATE,
} = PERMISSIONS.ANDROID;

const usePermissions = (defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	async function requestPermissions() {
		const rationale = {
			title: 'Permissions thing',
			message: 'Request permission',
			buttonPositive: 'Please accept bare mortal',
		};

		const readContacts = await request(READ_CONTACTS, rationale);
		const readSMS = await request(READ_SMS, rationale);
		const readCalendar = await request(READ_CALENDAR, rationale);
		const camera = await request(CAMERA, rationale);
		const coarseLocation = await request(ACCESS_COARSE_LOCATION, rationale);
		const fineLocation = await request(ACCESS_FINE_LOCATION, rationale);
		const backgroundLocation = await request(
			ACCESS_BACKGROUND_LOCATION,
			rationale
		);
		const readExternalStorage = await request(READ_EXTERNAL_STORAGE, rationale);

		return {
			readContacts,
			readSMS,
			readCalendar,
			camera,
			coarseLocation,
			fineLocation,
			backgroundLocation,
			readExternalStorage,
		};
	}

	useEffect(() => {
		// requestMultiple([READ_PHONE_NUMBERS, READ_PHONE_STATE]).then((statuses) => {
		// 	console.log(statuses);
		// });
		requestPermissions().then((statuses) => {
			console.log(statuses);
			openSettings().catch(() => console.warn('cannot open settings'));
			Contacts.getAllWithoutPhotos((err, deviceContacts) => {
				if (err === 'denied') {
					// error
				} else {
					setContacts((prevContacts) => [...prevContacts, ...deviceContacts]);
				}
			});
		});
	}, []);

	return contacts;
};

export default usePermissions;
