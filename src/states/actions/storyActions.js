import {
	STORY_UPDATE_USER_ACTION,
	STORY_UPDATE_ACTIVE_CHOICE_INDEX,
	STORY_UPDATE_DIALOGUE_LOG,
	STORY_UPDATE_CURRENT_SCRIPT_ID,
	STORY_UPDATE_USERNAME,
	STORY_HIDE_NOTIFICATION,
	STORY_SHOW_NOTIFICATION,
	STORY_REPEAT_NOTIFICATION,
	STORY_UPDATE_NOTIFICATION_MESSAGE,
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

export const hideNotification = (dispatch) =>
	dispatch({ type: STORY_HIDE_NOTIFICATION });

export const showNotification = (dispatch) =>
	dispatch({ type: STORY_SHOW_NOTIFICATION });

export const repeatNotification = (dispatch) =>
	dispatch({ type: STORY_REPEAT_NOTIFICATION });

export const updateNotificationMessage = (dispatch, message) =>
	dispatch({ type: STORY_UPDATE_NOTIFICATION_MESSAGE, payload: { message } });
