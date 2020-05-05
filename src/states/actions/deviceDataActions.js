import {
	DEVICE_GET_CONTACTS_START,
	DEVICE_GET_CONTACTS_SUCCESS,
	DEVICE_GET_CONTACTS_FAILURE,
	DEVICE_SET_CONTACTS,
	DEVICE_GET_SMS_START,
	DEVICE_GET_SMS_SUCCESS,
	DEVICE_GET_SMS_FAILURE,
	DEVICE_SET_SMS,
	DEVICE_GET_GALLERY_START,
	DEVICE_GET_GALLERY_SUCCESS,
	DEVICE_GET_GALLERY_FAILURE,
	DEVICE_SET_GALLERY,
} from '../actionTypes';

export const getDeviceContactsStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_CONTACTS_START });
export const getDeviceContactsSuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_CONTACTS_SUCCESS });

export const getDeviceContactsFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_CONTACTS_FAILURE });

export const setDeviceContacts = (dispatch, contacts) =>
	dispatch({ type: DEVICE_SET_CONTACTS, payload: { contacts } });

export const getDeviceSmsStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_SMS_START });
export const getDeviceSmsSuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_SMS_SUCCESS });

export const getDeviceSmsFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_SMS_FAILURE });

export const setDeviceSms = (dispatch, count, list) => {
	// TODO : Format Sms List
	return dispatch({ type: DEVICE_SET_SMS, payload: { count, list } });
};

export const getDeviceGalleryStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_GALLERY_START });

export const getDeviceGallerySuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_GALLERY_SUCCESS });

export const getDeviceGalleryFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_GALLERY_FAILURE });

export const setDeviceGallery = (dispatch, count, albums, photos) => {
	// TODO : Format Photos perhaps
	dispatch({ type: DEVICE_SET_GALLERY, payload: { count, albums, photos } });
};
