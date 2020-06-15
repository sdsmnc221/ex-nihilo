import Data from 'data';

import dataContacts from 'data/json/contacts';
import dataEmails from 'data/json/emails';
import dataSms from 'data/json/sms';
import dataStoryScripts from 'data/json/storyScripts';

import { replaceTemplate, shuffle } from 'utils';
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

const sms = dataSms
	.map((sms_) => Data('SMS', sms_))
	.sort((a, b) => b.startDate - a.startDate);

const smsWithNotification = sms.filter((sms_) => sms_.notification);

const notifications = shuffle(
	[
		...smsWithNotification.map((sms_) => ({ ...sms_, type: 'message' })),
		...smsWithNotification.map((sms_) => ({ ...sms_, type: 'call' })),
	].map((notification) => Data('NOTIFICATION', notification))
);

const storyScripts = dataStoryScripts.map((script) =>
	Data('STORY_SCRIPT', script)
);

export { accounts, contacts, emails, notifications, photos, sms, storyScripts };
