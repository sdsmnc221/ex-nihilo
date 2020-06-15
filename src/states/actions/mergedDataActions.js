import {
	MERGED_DATA_SET_CONTACTS,
	MERGED_DATA_SET_PHOTOS,
	MERGED_DATA_SET_SMS,
	MERGED_DATA_UPDATE_SMS_WITH_JANUS,
	MERGED_DATA_UPDATE_JANUS_SMS_LAST_MESSAGE,
} from '../actionTypes';

export const setAppContacts = (dispatch, contacts) => {
	dispatch({ type: MERGED_DATA_SET_CONTACTS, payload: { contacts } });
};

export const setAppGallery = (dispatch, gallery) => {
	dispatch({ type: MERGED_DATA_SET_PHOTOS, payload: { ...gallery } });
};

export const setAppSms = (dispatch, sms) => {
	dispatch({ type: MERGED_DATA_SET_SMS, payload: { sms } });
};

export const updateSmsWithJanus = (dispatch, JanusSms) => {
	dispatch({ type: MERGED_DATA_UPDATE_SMS_WITH_JANUS, payload: { JanusSms } });
};

export const updateJanusLastMessage = (dispatch, lastMessage) => {
	dispatch({
		type: MERGED_DATA_UPDATE_JANUS_SMS_LAST_MESSAGE,
		payload: { lastMessage },
	});
};
