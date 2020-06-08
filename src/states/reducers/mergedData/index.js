import initialStates from 'states/initialStates';
import { MERGED_DATA_SET_PHOTOS } from 'states/actionTypes';

function mergedData(state = initialStates.mergedData, action) {
	switch (action.type) {
		case MERGED_DATA_SET_PHOTOS:
			return {
				...state,
				gallery: action.payload,
			};
		default:
			return state;
	}
}

export default mergedData;
