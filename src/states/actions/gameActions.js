import {
	GAME_INCREMENT_CHANGES,
	GAME_UNLOCK_APP,
	GAME_UNLOCK_ALBUM,
	GAME_UNLOCK_EMAIL,
} from '../actionTypes';

export const incrementChanges = (dispatch) =>
	dispatch({ type: GAME_INCREMENT_CHANGES });

export const unlockApp = (dispatch) => dispatch({ type: GAME_UNLOCK_APP });

export const unlockAlbum = (dispatch) => dispatch({ type: GAME_UNLOCK_ALBUM });

export const unlockEmail = (dispatch) => dispatch({ type: GAME_UNLOCK_EMAIL });
