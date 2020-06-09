import initialStates from 'states/initialStates';
import {
	GAME_INCREMENT_CHANGES,
	GAME_UNLOCK_APP,
	GAME_UNLOCK_ALBUM,
	GAME_UNLOCK_EMAIL,
} from 'states/actionTypes';

function game(state = initialStates.game, action) {
	switch (action.type) {
		case GAME_INCREMENT_CHANGES:
			return {
				...state,
				changesCount: state.changesCount + 1,
			};
		case GAME_UNLOCK_APP:
			return {
				...state,
				UNLOCK_APP: true,
			};
		case GAME_UNLOCK_ALBUM:
			return {
				...state,
				UNLOCK_ALBUM: true,
			};
		case GAME_UNLOCK_EMAIL:
			return {
				...state,
				UNLOCK_EMAIL: true,
			};
		default:
			return state;
	}
}

export default game;
