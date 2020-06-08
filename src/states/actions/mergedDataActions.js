import { MERGED_DATA_SET_PHOTOS } from '../actionTypes';

export const setAppGallery = (dispatch, gallery) => {
	dispatch({ type: MERGED_DATA_SET_PHOTOS, payload: { ...gallery } });
};
