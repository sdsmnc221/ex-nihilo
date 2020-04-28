import { useState, useEffect } from 'react';
import Contacts from 'react-native-contacts';

const useDeviceData = (permissionsRequested, defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	useEffect(() => {
		console.log(permissionsRequested);

		if (permissionsRequested) {
			Contacts.getAllWithoutPhotos((err, deviceContacts) => {
				if (err === 'denied') {
					// error
				} else {
					setContacts((prevContacts) => [...prevContacts, ...deviceContacts]);
				}
			});
		}
	}, [permissionsRequested]);

	return contacts;
};

export default useDeviceData;
