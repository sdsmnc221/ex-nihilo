import Data from 'data';
import initialStates from 'states/initialStates';
import { DEVICE_SET_CONTACTS, DEVICE_SET_SMS } from 'states/actionTypes';

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
			const { count, list } = action.payload;
			return {
				...state,
				sms: {
					count,
					list,
				},
			};
		default:
			return state;
	}
}

export default deviceData;
