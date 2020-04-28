import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Contacts from 'react-native-contacts';

const useDeviceData = (defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	const { permissions } = useSelector((state) => state);

	useEffect(() => {
		console.log(permissions);
	}, [permissions]);

	useEffect(() => {
		if (permissions.requested) {
			Contacts.getAllWithoutPhotos((err, deviceContacts) => {
				if (err === 'denied') {
					// error
				} else {
					setContacts((prevContacts) => [...prevContacts, ...deviceContacts]);
				}
			});
		}
	}, [permissions.requested]);

	return contacts;
};

export default useDeviceData;
