import Data from 'data';

import dataContacts from 'data/json/contacts';
import dataEmails from 'data/json/emails';
import dataStoryScripts from 'data/json/storyScripts';

import { replaceTemplate } from 'utils';
import {
	EMAIL_ACCOUNT,
	FAKE_PHOTO_NB,
	FAKE_PHOTO_NAME_TEMPLATE,
} from 'configs';

const accounts = [EMAIL_ACCOUNT];

const contacts = dataContacts.map((contact) => Data('CONTACT', contact));

const emails = dataEmails
	.map((email) => Data('EMAIL', email))
	.sort((a, b) => b.date - a.date);

const photos = [...Array(parseInt(FAKE_PHOTO_NB, 10))]
	.map((e, i) => i + 1)
	.map((index) => replaceTemplate(FAKE_PHOTO_NAME_TEMPLATE, index))
	.map((photo) => Data('PHOTO', { isFakePhoto: true, source: photo }));

const storyScripts = dataStoryScripts.map((script) =>
	Data('STORY_SCRIPT', script)
);

export { accounts, contacts, emails, photos, storyScripts };
