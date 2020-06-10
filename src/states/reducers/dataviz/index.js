import initialStates from 'states/initialStates';
import {
	DATAVIZ_SET_TAB_INDEX,
	DATAVIZ_RESET_TAB_INDEX,
} from 'states/actionTypes';

function dataviz(state = initialStates.dataviz, action) {
	switch (action.type) {
		case DATAVIZ_SET_TAB_INDEX:
			const { tabIndex } = action.payload;
			return {
				...state,
				tabIndex,
			};
		case DATAVIZ_RESET_TAB_INDEX:
			return {
				...state,
				tabIndex: null,
			};
		default:
			return state;
	}
}

export default dataviz;
