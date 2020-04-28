import Data from 'data';

import dataContacts from 'data/json/contacts';
import dataStoryScripts from '../data/json/storyScripts';

const contacts = dataContacts.map((contact) => Data('CONTACT', contact));
const storyScripts = dataStoryScripts.map((script) =>
	Data('STORY_SCRIPT', script)
);

export default {
	permissions: {
		requested: false,
		statuses: null,
	},
	contacts,
	story: {
		scripts: storyScripts,
		dialogueLog: {
			currentScriptID: 1,
		},
	},
};
