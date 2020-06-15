export default class Notification {
	constructor({ title, lastDate, lastMessage, type }) {
		this.type = type;
		this.title = title;
		this.date = lastDate;
		this.message = lastMessage;
	}
}
