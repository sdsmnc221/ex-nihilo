import StoryChoice from './StoryChoice';

import { convertDelayTime } from 'hooks/DialogueManager/utils';
import { STORY_TYPES } from 'hooks/DialogueManager/configs';

const {
	BREAKPOINT,
	INPUT,
	MESSAGE,
	MESSAGE_AFTER_BREAKPOINT,
	MESSAGE_WITH_PLACEHOLDER,
	MESSAGE_WITH_CHOICES,
} = STORY_TYPES;

export default class StoryScript {
	constructor({ ID, type, text, choices, delayMinutes, nextID }) {
		this.ID = ID;
		this.type = type;

		switch (type) {
			case INPUT:
			case MESSAGE:
			case MESSAGE_WITH_PLACEHOLDER:
				this.text = text;
				this.nextID = nextID;
				break;
			case BREAKPOINT:
				this.delayTime = convertDelayTime(delayMinutes);
				this.nextID = nextID;
				break;
			case MESSAGE_AFTER_BREAKPOINT:
			case MESSAGE_WITH_CHOICES:
				this.text = text;
				this.choices = choices.map((choice) => new StoryChoice(choice));
				break;
			default:
				break;
		}
	}

	changeText(text) {
		this.text = text;
	}
}
