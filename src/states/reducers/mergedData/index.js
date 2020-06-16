import initialStates from 'states/initialStates';
import {
	MERGED_DATA_SET_PHOTOS,
	MERGED_DATA_SET_CONTACTS,
	MERGED_DATA_SET_SMS,
	MERGED_DATA_UPDATE_SMS_WITH_JANUS,
	MERGED_DATA_UPDATE_JANUS_SMS_LAST_MESSAGE,
} from 'states/actionTypes';

function mergedData(state = initialStates.mergedData, action) {
	switch (action.type) {
		case MERGED_DATA_SET_CONTACTS:
			const { contacts } = action.payload;
			return {
				...state,
				contacts,
			};
		case MERGED_DATA_SET_PHOTOS:
			return {
				...state,
				gallery: action.payload,
			};
		case MERGED_DATA_SET_SMS: {
			const { sms } = action.payload;
			return {
				...state,
				sms,
				smsNotifications: sms.length,
			};
		}
		case MERGED_DATA_UPDATE_SMS_WITH_JANUS: {
			const { JanusSms } = action.payload;
			const { sms } = state;

			sms.unshift(JanusSms);

			return {
				...state,
				sms,
			};
		}
		case MERGED_DATA_UPDATE_JANUS_SMS_LAST_MESSAGE: {
			const { lastMessage } = action.payload;
			const { sms } = state;

			sms[0].lastMessage = lastMessage;

			return {
				...state,
				sms,
			};
		}
		default:
			return state;
	}
}

export default mergedData;
