import initialStates from 'states/initialStates';
import {
	PERMISSION_REQUEST_START,
	PERMISSIONS_REQUEST_SUCCESS,
	PERMISSIONS_REQUEST_FAILURE,
	PERMISSIONS_STATUSES_SET,
} from 'states/actionTypes';

function permissions(state = initialStates.permissions, action) {
	switch (action.type) {
		case PERMISSION_REQUEST_START:
		case PERMISSIONS_REQUEST_FAILURE:
			return {
				...state,
				requested: false,
			};
		case PERMISSIONS_REQUEST_SUCCESS:
			return {
				...state,
				requested: true,
			};
		case PERMISSIONS_STATUSES_SET:
			const { statuses } = action.payload;
			return {
				...state,
				statuses,
			};
		default:
			return state;
	}
}

export default permissions;
