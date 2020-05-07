import Data from 'data';
import initialStates from 'states/initialStates';
import {
	DEVICE_SET_CONTACTS,
	DEVICE_SET_SMS,
	DEVICE_SET_GALLERY,
	DEVICE_SET_CALENDAR,
	DEVICE_SET_GPS,
	DEVICE_SET_CALL_LOG,
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
			};
		case DEVICE_SET_SMS:
			return {
				...state,
				sms: action.payload, // { count, list }
			};
		case DEVICE_SET_GALLERY:
			return {
				...state,
				gallery: action.payload, // { count, albums, photos }
			};
		case DEVICE_SET_CALENDAR:
			return {
				...state,
				calendar: action.payload, // { list (list of calendars), events }
			};
		case DEVICE_SET_GPS:
			return {
				...state,
				gps: action.payload, // { lat, long, address }
			};
		case DEVICE_SET_CALL_LOG:
			const { calls } = action.payload;
			return {
				...state,
				calls, // [ Array of calls ]
			};
		default:
			return state;
	}
}

export default deviceData;
