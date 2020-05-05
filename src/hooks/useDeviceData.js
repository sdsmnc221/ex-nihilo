import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contacts from 'react-native-contacts';
import {
	getDeviceContactsStart,
	getDeviceContactsFailure,
	getDeviceContactsSuccess,
	setDevicesContacts,
} from 'states/actions/deviceDataActions';

const useDeviceData = (defaultContacts = []) => {
	const [contacts, setContacts] = useState(defaultContacts);

	const { permissions } = useSelector((state) => state);

	const dispatch = useDispatch();

	useEffect(() => {
		if (permissions.requested) {
			getDeviceContactsStart(dispatch);
			Contacts.getAllWithoutPhotos((err, deviceContacts) => {
				if (err === 'denied') {
					getDeviceContactsFailure(dispatch);
				} else {
					getDeviceContactsSuccess(dispatch);
					setDevicesContacts(dispatch, deviceContacts);
					setContacts((prevContacts) => [...prevContacts, ...deviceContacts]);
				}
			});
		}
	}, [permissions.requested]);

	return contacts;
};

export default useDeviceData;
