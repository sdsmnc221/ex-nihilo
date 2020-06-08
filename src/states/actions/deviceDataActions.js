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
	DEVICE_GET_CALENDAR_START,
	DEVICE_GET_CALENDAR_SUCCESS,
	DEVICE_GET_CALENDAR_FAILURE,
	DEVICE_SET_CALENDAR,
	DEVICE_GET_GPS_START,
	DEVICE_GET_GPS_SUCCESS,
	DEVICE_GET_GPS_FAILURE,
	DEVICE_SET_GPS,
	DEVICE_GET_CALL_LOG_START,
	DEVICE_GET_CALL_LOG_SUCCESS,
	DEVICE_GET_CALL_LOG_FAILURE,
	DEVICE_SET_CALL_LOG,
	DEVICE_GET_ACCOUNTS_START,
	DEVICE_GET_ACCOUNTS_SUCCESS,
	DEVICE_GET_ACCOUNTS_FAILURE,
	DEVICE_SET_ACCOUNTS,
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

export const setDeviceSms = (dispatch, sms) => {
	// TODO : Format Sms List
	return dispatch({ type: DEVICE_SET_SMS, payload: { ...sms } });
};

export const getDeviceGalleryStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_GALLERY_START });

export const getDeviceGallerySuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_GALLERY_SUCCESS });

export const getDeviceGalleryFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_GALLERY_FAILURE });

export const setDeviceGallery = (dispatch, gallery) => {
	dispatch({ type: DEVICE_SET_GALLERY, payload: { ...gallery } });
};

export const getDeviceCalendarStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_CALENDAR_START });

export const getDeviceCalendarSuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_CALENDAR_SUCCESS });

export const getDeviceCalendarFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_CALENDAR_FAILURE });

export const setDeviceCalendar = (dispatch, calendar) => {
	// TODO : Format Calendar Events
	dispatch({ type: DEVICE_SET_CALENDAR, payload: { ...calendar } });
};

export const getDeviceGpsStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_GPS_START });

export const getDeviceGpsSuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_GPS_SUCCESS });

export const getDeviceGpsFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_GPS_FAILURE });

export const setDeviceGps = (dispatch, gps) => {
	dispatch({ type: DEVICE_SET_GPS, payload: { ...gps } });
};

export const getDeviceCallLogStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_CALL_LOG_START });

export const getDeviceCallLogSuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_CALL_LOG_SUCCESS });

export const getDeviceCallLogFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_CALL_LOG_FAILURE });

export const setDeviceCallLog = (dispatch, calls) => {
	// TODO : Format Call Log
	// calls is an array, not an object
	dispatch({ type: DEVICE_SET_CALL_LOG, payload: { calls } });
};

export const getDeviceAccountsStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_ACCOUNTS_START });

export const getDeviceAccountsSuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_ACCOUNTS_SUCCESS });

export const getDeviceAccountsFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_ACCOUNTS_FAILURE });

export const setDeviceAccounts = (dispatch, accounts) => {
	// accounts is an array, not an object
	dispatch({ type: DEVICE_SET_ACCOUNTS, payload: { accounts } });
};
