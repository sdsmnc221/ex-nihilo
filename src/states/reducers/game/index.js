import initialStates from 'states/initialStates';
import {
	GAME_INCREMENT_CHANGES,
	GAME_UNLOCK_APP,
	GAME_UNLOCK_ALBUM,
	GAME_UNLOCK_EMAIL,
	GAME_ACTIVATE_SMALL_GLITCH,
	GAME_ACTIVATE_BIG_GLITCH,
	GAME_RESET_GLITCH,
} from 'states/actionTypes';

import { NUMBERS } from 'configs';

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
		case GAME_ACTIVATE_SMALL_GLITCH:
			return {
				...state,
				glitchEnabled: true,
				glitchAmount: NUMBERS.GLITCH_XS,
			};
		case GAME_ACTIVATE_BIG_GLITCH:
			return {
				...state,
				glitchEnabled: true,
				glitchAmount: NUMBERS.GLITCH_XL,
			};
		case GAME_RESET_GLITCH:
			return {
				...state,
				glitchEnabled: false,
			};
		default:
			return state;
	}
}

export default game;
