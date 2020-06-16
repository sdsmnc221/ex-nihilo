import StoryChoice from './StoryChoice';

import { convertDelayTime } from 'utils';
import { STORY_TYPES } from 'hooks/DialogueManager/configs';

const {
	BREAKPOINT,
	BREAKPOINT_TRIGGER,
	BUG,
	END,
	INPUT,
	MESSAGE,
	MESSAGE_AFTER_BREAKPOINT,
	MESSAGE_AFTER_BREAKPOINT_NO_CHOICE,
	MESSAGE_WITH_PLACEHOLDER,
	MESSAGE_WITH_CHOICES,
} = STORY_TYPES;

export default class StoryScript {
	constructor({
		ID,
		type,
		smsActionType,
		text,
		choices,
		delayMinutes,
		condition,
		nextID,
	}) {
		this.ID = ID;
		this.type = type;
		this.smsActionType = smsActionType;

		switch (type) {
			case BUG:
			case INPUT:
			case MESSAGE:
			case MESSAGE_WITH_PLACEHOLDER:
			case MESSAGE_AFTER_BREAKPOINT_NO_CHOICE:
				this.text = text;
				this.nextID = nextID;
				break;
			case BREAKPOINT:
				this.delayTime = convertDelayTime(delayMinutes);
				this.nextID = nextID;
				break;
			case BREAKPOINT_TRIGGER:
				this.condition = condition;
				this.nextID = nextID;
				break;
			case MESSAGE_AFTER_BREAKPOINT:
			case MESSAGE_WITH_CHOICES:
				this.text = text;
				this.choices = choices.map((choice) => new StoryChoice(choice));
				break;
			case END:
				this.text = text;
				break;
			default:
				break;
		}
	}

	changeText(text) {
		this.text = text;
	}
}
