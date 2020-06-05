import {
	STORY_UPDATE_USER_ACTION,
	STORY_UPDATE_ACTIVE_CHOICE_INDEX,
	STORY_UPDATE_DIALOGUE_LOG,
	STORY_UPDATE_CURRENT_SCRIPT_ID,
	STORY_UPDATE_USERNAME,
} from '../actionTypes';

export const updateUserAction = (dispatch, userAction) =>
	dispatch({ type: STORY_UPDATE_USER_ACTION, payload: { ...userAction } });

export const updateActiveChoiceIndex = (dispatch, activeChoiceIndex) =>
	dispatch({
		type: STORY_UPDATE_ACTIVE_CHOICE_INDEX,
		payload: { ...activeChoiceIndex },
	});

export const updateDialogueLog = (dispatch, dialogueMessage) =>
	dispatch({ type: STORY_UPDATE_DIALOGUE_LOG, payload: { dialogueMessage } });

export const updateCurrentScriptID = (dispatch, currentScriptID) =>
	dispatch({
		type: STORY_UPDATE_CURRENT_SCRIPT_ID,
		payload: { currentScriptID },
	});

export const updateUsername = (dispatch, username) =>
	dispatch({ type: STORY_UPDATE_USERNAME, payload: { username } });
