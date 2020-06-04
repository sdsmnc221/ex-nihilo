import Data from 'data';

import dataContacts from 'data/json/contacts';
import dataStoryScripts from 'data/json/storyScripts';

import DialogueMessage from 'data/classes/DialogueMessage';

const contacts = dataContacts.map((contact) => Data('CONTACT', contact));

const storyScripts = dataStoryScripts.map((script) =>
	Data('STORY_SCRIPT', script)
);

export { storyScripts };

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
		scripts: storyScripts,
		dialogueLog: [new DialogueMessage({ text: storyScripts[0].text })],
		currentScriptID: 1,
		userAction: {
			type: null,
			choices: [],
			activeChoiceIndex: null,
		},
	},
};
