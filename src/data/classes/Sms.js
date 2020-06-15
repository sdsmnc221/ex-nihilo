import moment from 'moment';
import { last, randomDate } from 'utils';
import { storyScripts } from 'states/data';

export default class Sms {
	constructor({ title, notification, content }) {
		this.title = title;

		if (title !== 'Janus') {
			this.notification = notification;
			this.startDate = randomDate(new Date(2020, 2, 1));
			this.content = this.formatContent(content);
			this.lastDate = this.getLastDate();
			this.lastMessage = this.getLastMessage();
		} else {
			this.lastDate = moment().format('Do MMM');
			this.lastMessage = storyScripts[0].text;
		}
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
