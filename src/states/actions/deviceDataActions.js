import {
	DEVICE_GET_CONTACTS_START,
	DEVICE_GET_CONTACTS_SUCCESS,
	DEVICE_GET_CONTACTS_FAILURE,
	DEVICE_GET_CONTACTS_SET,
} from '../actionTypes';

export const getDeviceContactsStart = (dispatch) =>
	dispatch({ type: DEVICE_GET_CONTACTS_START });
export const getDeviceContactsSuccess = (dispatch) =>
	dispatch({ type: DEVICE_GET_CONTACTS_SUCCESS });

export const getDeviceContactsFailure = (dispatch) =>
	dispatch({ type: DEVICE_GET_CONTACTS_FAILURE });

export const setDevicesContacts = (dispatch, contacts) =>
	dispatch({ type: DEVICE_GET_CONTACTS_SET, payload: { contacts } });
