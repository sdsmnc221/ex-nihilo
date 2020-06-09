import DialogueMessage from 'data/classes/DialogueMessage';

import {
	accounts,
	emails,
	contacts,
	notifications,
	photos,
	sms,
	storyScripts as scripts,
} from './data';

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
		sms,
		emails,
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
		notifications,
	},
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
	game: {
		UNLOCK_APP: false,
		UNLOCK_ALBUM: false,
		UNLOCK_EMAIL: false,
		changesCount: 0,
	},
};
