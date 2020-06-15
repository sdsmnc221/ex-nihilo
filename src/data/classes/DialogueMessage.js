export default class DialogueMessage {
	constructor({ isUser, text, smsActionType }) {
		this.isUser = isUser;
		this.text = text;
		this.smsActionType = smsActionType;
	}
}
