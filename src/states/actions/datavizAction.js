import { DATAVIZ_SET_TAB_INDEX, DATAVIZ_RESET_TAB_INDEX } from '../actionTypes';

export const setTabIndex = (dispatch, tabIndex) =>
	dispatch({ type: DATAVIZ_SET_TAB_INDEX, payload: { tabIndex } });

export const resetTabIndex = (dispatch) =>
	dispatch({ type: DATAVIZ_RESET_TAB_INDEX });
