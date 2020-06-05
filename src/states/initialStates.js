import DialogueMessage from 'data/classes/DialogueMessage';

import { contacts, storyScripts as scripts } from './data';

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
			photos: null,
		},
		gps: {
			lat: null,
			long: null,
			address: null,
		},
		misc: null,
		sms: {
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
