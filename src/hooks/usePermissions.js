import { useState, useEffect } from 'react';
import { request, PERMISSIONS } from 'react-native-permissions';
import Contacts from 'react-native-contacts';

const usePermissions = (defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	async function requestPermissions() {
		const rationale = {
			title: 'Permissions thing',
			message: 'Request permission',
			buttonPositive: 'Please accept bare mortal',
		};
		const readContactsStatus = await request(
			PERMISSIONS.ANDROID.READ_CONTACTS,
			rationale
		);
		const writeContactsStatus = await request(
			PERMISSIONS.ANDROID.WRITE_CONTACTS,
			rationale
		);
		return { readContactsStatus, writeContactsStatus };
	}

	useEffect(() => {
		requestPermissions().then((statuses) => {
			console.log(statuses);
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
