export default class StoryChoice {
	constructor({ text, nextID }) {
		this.text = text;
		this.nextID = nextID;
		this.isUser = true;
	}
}
