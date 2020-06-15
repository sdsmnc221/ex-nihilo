import initialStates from 'states/initialStates';
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
} from 'states/actionTypes';

function story(state = initialStates.story, action) {
	switch (action.type) {
		case STORY_UPDATE_USER_ACTION:
		case STORY_UPDATE_ACTIVE_CHOICE_INDEX:
			return {
				...state,
				userAction: {
					...state.userAction,
					...action.payload,
				},
			};
		case STORY_UPDATE_DIALOGUE_LOG:
			return {
				...state,
				dialogueLog: [...state.dialogueLog, action.payload.dialogueMessage],
			};
		case STORY_UPDATE_CURRENT_SCRIPT_ID:
			return {
				...state,
				currentScriptID: action.payload.currentScriptID,
			};
		case STORY_UPDATE_USERNAME:
			return {
				...state,
				username: action.payload.username,
			};
		case STORY_HIDE_NOTIFICATION:
			return {
				...state,
				notification: {
					...state.notification,
					shown: false,
					repeatCount: 0,
				},
			};
		case STORY_SHOW_NOTIFICATION:
			return {
				...state,
				notification: {
					...state.notification,
					shown: true,
					repeatCount: 1,
				},
			};
		case STORY_REPEAT_NOTIFICATION:
			return {
				...state,
				notification: {
					...state.notification,
					repeatCount: state.notification.repeatCount + 1,
				},
			};
		case STORY_UPDATE_NOTIFICATION_MESSAGE:
			const { message } = action.payload;
			return {
				...state,
				notification: {
					...state.notification,
					message,
				},
			};
		default:
			return state;
	}
}

export default story;
