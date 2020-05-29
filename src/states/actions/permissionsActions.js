import {
	PERMISSIONS_REQUEST_START,
	PERMISSIONS_REQUEST_SUCCESS,
	PERMISSIONS_REQUEST_FAILURE,
	PERMISSIONS_STATUSES_SET,
} from '../actionTypes';

export const requestPermissionsStart = (dispatch) =>
	dispatch({ type: PERMISSIONS_REQUEST_START });
export const requestPermissionsSuccess = (dispatch) =>
	dispatch({ type: PERMISSIONS_REQUEST_SUCCESS });

export const requestPermissionsFailure = (dispatch) =>
	dispatch({ type: PERMISSIONS_REQUEST_FAILURE });

export const setPermissionsStatuses = (dispatch, statuses) =>
	dispatch({ type: PERMISSIONS_STATUSES_SET, payload: { statuses } });
