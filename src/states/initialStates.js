import DialogueMessage from 'data/classes/DialogueMessage';

import { accounts, contacts, photos, storyScripts as scripts } from './data';

export default {
	permissions: {
		requested: false,
		statuses: null,
	},
	deviceData: {
		accounts: null,
		contacts: null,
		calendar: {
			list: null,
			events: null,
		},
		calls: null,
		gallery: {
			count: 0,
			albums: null,
			photos: [],
		},
		gps: {
			lat: null,
			long: null,
			address: null,
		},
		sms: {
			count: 0,
			list: null,
		},
		misc: null,
	},
	fakeData: {
		accounts,
		contacts,
		calls: null,
		gallery: {
			count: photos.length,
			photos,
		},
		sms: {
			count: 0,
			list: null,
		},
		mails: {
			count: 0,
			list: null,
		},
	},
	mergedData: {
		contacts: null,
		gallery: {
			count: 0,
			photos: [],
		},
		sms: {
			count: 0,
			list: null,
		},
		mails: {
			count: 0,
			list: null,
		},
	},
	contacts,
	story: {
		scripts,
		dialogueLog: [new DialogueMessage({ text: scripts[0].text })],
		currentScriptID: 1,
		username: null,
		userAction: {
			type: null,
			choices: [],
			activeChoiceIndex: null,
		},
	},
};
