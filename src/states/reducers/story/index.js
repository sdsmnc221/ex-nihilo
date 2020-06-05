import initialStates from 'states/initialStates';
import {
	STORY_UPDATE_USER_ACTION,
	STORY_UPDATE_ACTIVE_CHOICE_INDEX,
	STORY_UPDATE_DIALOGUE_LOG,
	STORY_UPDATE_CURRENT_SCRIPT_ID,
	STORY_UPDATE_USERNAME,
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
		default:
			return state;
	}
}

export default story;
