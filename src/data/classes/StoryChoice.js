export default class StoryChoice {
	constructor({ text, action, nextID }) {
		this.text = text;
		this.action = action;
		this.nextID = nextID;
		this.isUser = true;
	}

	changeText(text) {
		this.text = text;
	}
}
