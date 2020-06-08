import {
	MERGED_DATA_SET_CONTACTS,
	MERGED_DATA_SET_PHOTOS,
} from '../actionTypes';

export const setAppContacts = (dispatch, contacts) => {
	dispatch({ type: MERGED_DATA_SET_CONTACTS, payload: { contacts } });
};

export const setAppGallery = (dispatch, gallery) => {
	dispatch({ type: MERGED_DATA_SET_PHOTOS, payload: { ...gallery } });
};
