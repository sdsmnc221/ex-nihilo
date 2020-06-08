import moment from 'moment';
import { last, randomDate } from 'utils';

export default class Sms {
	constructor({ title, notification, content }) {
		this.title = title;
		this.notification = notification;
		this.startDate = randomDate(new Date(2020, 2, 1));
		this.content = this.formatContent(content);
		this.lastDate = this.getLastDate();
		this.lastMessage = this.getLastMessage();
	}

	formatContent(content) {
		return content.map((section, i) => {
			if (i !== 0) {
				section.date = moment(this.startDate).add(i, 'days');
				section.title = moment(section.date).format('dddd, Do MMM');
			}
			return section;
		});
	}

	getLastDate() {
		if (this.content.length === 1) {
			return moment(this.startDate).format('Do MMM');
		} else {
			return moment(last(this.content).date).format('Do MMM');
		}
	}

	getLastMessage() {
		return last(last(this.content).data).data;
	}
}
