import Data from 'data';
import initialStates from 'states/initialStates';
import {
	DEVICE_SET_CONTACTS,
	DEVICE_SET_SMS,
	DEVICE_SET_GALLERY,
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
		default:
			return state;
	}
}

export default deviceData;
