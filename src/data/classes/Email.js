import moment from 'moment';
import { randomDate } from 'utils';

export default class DialogueMessage {
	constructor({ object, from, to, content, star }) {
		this.object = object;
		this.from = from;
		this.to = to;
		this.content = content;
		this.shortMessage = this.content[0].content;
		this.star = star;
		this.date = randomDate();
		this.formatDate = moment(this.date).format('Do MMM');
	}
}
