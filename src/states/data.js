import Data from 'data';

import dataContacts from 'data/json/contacts';
import dataStoryScripts from 'data/json/storyScripts';

import { replaceTemplate } from 'utils';
import { FAKE_PHOTO_NB, FAKE_PHOTO_NAME_TEMPLATE } from 'configs';
import { EMAIL_ACCOUNT } from '../configs';

const accounts = [EMAIL_ACCOUNT];

const contacts = dataContacts.map((contact) => Data('CONTACT', contact));

const photos = [...Array(parseInt(FAKE_PHOTO_NB, 10))]
	.map((e, i) => i + 1)
	.map((index) => replaceTemplate(FAKE_PHOTO_NAME_TEMPLATE, index))
	.map((photo) => Data('PHOTO', { isFakePhoto: true, source: photo }));

const storyScripts = dataStoryScripts.map((script) =>
	Data('STORY_SCRIPT', script)
);

export { accounts, contacts, photos, storyScripts };
