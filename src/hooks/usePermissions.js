import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { request, openSettings, PERMISSIONS } from 'react-native-permissions';

import {
	requestPermissionsStart,
	requestPermissionsSuccess,
	requestPermissionsFailure,
	setPermissionsStatuses,
} from 'states/actions/permissionsActions';

const {
	ACCESS_BACKGROUND_LOCATION,
	ACCESS_COARSE_LOCATION,
	ACCESS_FINE_LOCATION,
	CAMERA,
	GET_ACCOUNTS,
	READ_CALENDAR,
	READ_CALL_LOG,
	READ_CONTACTS,
	READ_EXTERNAL_STORAGE,
	READ_PHONE_NUMBERS,
	READ_PHONE_STATE,
	READ_SMS,
} = PERMISSIONS.ANDROID;

const usePermissions = (doOpenAppSettings = false) => {
	const requestPermissions = async () => {
		// Access background location goes last.
		const coarseLocation = await request(ACCESS_COARSE_LOCATION);
		const fineLocation = await request(ACCESS_FINE_LOCATION);
		const backgroundLocation = await request(ACCESS_BACKGROUND_LOCATION);

		const camera = await request(CAMERA);

		const getAccounts = await request(GET_ACCOUNTS);

		const readCalendar = await request(READ_CALENDAR);

		const readCallLog = await request(READ_CALL_LOG);

		const readContacts = await request(READ_CONTACTS);

		const readExternalStorage = await request(READ_EXTERNAL_STORAGE);

		const readPhoneNumbers = await request(READ_PHONE_NUMBERS);

		const readPhoneState = await request(READ_PHONE_STATE);

		const readSMS = await request(READ_SMS);

		return {
			coarseLocation,
			fineLocation,
			backgroundLocation,
			camera,
			getAccounts,
			readCalendar,
			readCallLog,
			readContacts,
			readExternalStorage,
			readPhoneNumbers,
			readPhoneState,
			readSMS,
		};
	};

	const dispatch = useDispatch();

	useEffect(() => {
		requestPermissionsStart(dispatch);
		requestPermissions()
			.then((statuses) => {
				doOpenAppSettings &&
					openSettings().catch(() => console.warn('cannot open settings'));
				requestPermissionsSuccess(dispatch);
				setPermissionsStatuses(dispatch, statuses);
			})
			.catch((error) => {
				requestPermissionsFailure(dispatch);
				console.log(error);
			});
	}, [dispatch, doOpenAppSettings]);

	return;
};

export default usePermissions;
