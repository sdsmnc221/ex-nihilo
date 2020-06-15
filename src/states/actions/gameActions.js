import {
	GAME_INCREMENT_CHANGES,
	GAME_UNLOCK_APP,
	GAME_UNLOCK_ALBUM,
	GAME_UNLOCK_EMAIL,
	GAME_ACTIVATE_SMALL_GLITCH,
	GAME_ACTIVATE_BIG_GLITCH,
	GAME_RESET_GLITCH,
} from '../actionTypes';

export const incrementChanges = (dispatch) =>
	dispatch({ type: GAME_INCREMENT_CHANGES });

export const unlockApp = (dispatch) => dispatch({ type: GAME_UNLOCK_APP });

export const unlockAlbum = (dispatch) => dispatch({ type: GAME_UNLOCK_ALBUM });

export const unlockEmail = (dispatch) => dispatch({ type: GAME_UNLOCK_EMAIL });

export const activateSmallGlitch = (dispatch) =>
	dispatch({ type: GAME_ACTIVATE_SMALL_GLITCH });

export const activateBigGlitch = (dispatch) =>
	dispatch({ type: GAME_ACTIVATE_BIG_GLITCH });

export const resetGlitch = (dispatch) => dispatch({ type: GAME_RESET_GLITCH });
