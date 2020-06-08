import Data from 'data';
import initialStates from 'states/initialStates';
import {
	DEVICE_SET_CONTACTS,
	DEVICE_SET_SMS,
	DEVICE_SET_GALLERY,
	DEVICE_SET_CALENDAR,
	DEVICE_SET_GPS,
	DEVICE_SET_CALL_LOG,
	DEVICE_SET_ACCOUNTS,
} from 'states/actionTypes';

function deviceData(state = initialStates.deviceData, action) {
	switch (action.type) {
		case DEVICE_SET_CONTACTS:
			const { contacts } = action.payload;
			return {
				...state,
				contacts: contacts.map((deviceContactInfo) =>
					Data('CONTACT', { fromDevice: true, deviceContactInfo })
				),
				misc: {
					...state.misc,
					contactsSet: true,
				},
			};
		case DEVICE_SET_SMS:
			return {
				...state,
				sms: action.payload, // { count, list }
				misc: {
					...state.misc,
					smsSet: true,
				},
			};
		case DEVICE_SET_GALLERY:
			return {
				...state,
				gallery: action.payload, // { count, albums, photos }
				misc: {
					...state.misc,
					gallerySet: true,
				},
			};
		case DEVICE_SET_CALENDAR:
			return {
				...state,
				calendar: action.payload, // { list (list of calendars), events }
				misc: {
					...state.misc,
					calendarSet: true,
				},
			};
		case DEVICE_SET_GPS:
			return {
				...state,
				gps: action.payload, // { lat, long, address }
				misc: {
					...state.misc,
					gpsSet: true,
				},
			};
		case DEVICE_SET_CALL_LOG:
			const { calls } = action.payload;
			return {
				...state,
				calls, // [ Array of calls ]
				misc: {
					...state.misc,
					callsSet: true,
				},
			};
		case DEVICE_SET_ACCOUNTS:
			const { accounts } = action.payload;
			return {
				...state,
				accounts, // [ Array of accounts ]
				misc: {
					...state.misc,
					accountsSet: true,
				},
			};
		default:
			return state;
	}
}

export default deviceData;
