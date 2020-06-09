export default class StoryChoice {
	constructor({ text, action, nextID }) {
		this.text = text;
		this.action = action;
		this.nextID = nextID;
		this.isUser = true;
		this.changeTextCount = 0;
	}

	changeText(text) {
		if (this.changeTextCount === 0) {
			this.text = text;
		}
		this.changeTextCount++;
	}
}
