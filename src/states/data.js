import Data from 'data';

import contacts from 'data/defaultData/contacts';
import emails from 'data/defaultData/emails';
import sms from 'data/defaultData/sms';
import storyScripts from 'data/defaultData/storyScripts';

import { replaceTemplate, shuffle } from 'utils';
import {
	EMAIL_ACCOUNT,
	FAKE_PHOTO_NB,
	FAKE_PHOTO_NAME_TEMPLATE,
} from 'configs';

const accounts = [EMAIL_ACCOUNT];

const photos = [...Array(parseInt(FAKE_PHOTO_NB, 10))]
	.map((e, i) => i + 1)
	.map((index) => replaceTemplate(FAKE_PHOTO_NAME_TEMPLATE, index))
	.map((photo) => Data('PHOTO', { isFakePhoto: true, source: photo }));

const smsWithNotification = sms.filter((sms_) => sms_.notification);

const notifications = shuffle(
	[
		...smsWithNotification.map((sms_) => ({ ...sms_, type: 'message' })),
		...smsWithNotification.map((sms_) => ({ ...sms_, type: 'call' })),
	].map((notification) => Data('NOTIFICATION', notification))
);

export { accounts, contacts, emails, notifications, photos, sms, storyScripts };
