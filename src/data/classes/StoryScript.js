import StoryChoice from './StoryChoice';

export default class StoryScript {
	constructor({ ID, type, text, choices, nextID }) {
		this.ID = ID;
		this.type = type;

		switch (type) {
			case 'INPUT':
			case 'MESSAGE':
			case 'MESSAGE_WITH_PLACEHOLDER':
				this.text = text;
				this.nextID = nextID;
				break;
			case 'MESSAGE_WITH_BREAKPOINT':
				this.text = text;
				break;
			case 'MESSAGE_WITH_CHOICES':
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
