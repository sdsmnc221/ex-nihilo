import Data from 'data';
import initialStates from 'states/initialStates';
import {
	DEVICE_GET_CONTACTS_START,
	DEVICE_GET_CONTACTS_SUCCESS,
	DEVICE_GET_CONTACTS_FAILURE,
	DEVICE_GET_CONTACTS_SET,
} from 'states/actionTypes';

function deviceData(state = initialStates.deviceData, action) {
	switch (action.type) {
		case DEVICE_GET_CONTACTS_SET:
			const { contacts } = action.payload;
			return {
				...state,
				contacts: contacts.map((deviceContactInfo) =>
					Data('CONTACT', { fromDevice: true, deviceContactInfo })
				),
			};
		default:
			return state;
	}
}

export default deviceData;
