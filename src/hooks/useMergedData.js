import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Data from 'data';

import {
	setAppContacts,
	setAppGallery,
	setAppSms,
	updateSmsWithJanus,
} from 'states/actions/mergedDataActions';
import { showNotification } from 'states/actions/storyActions';

import { NUMBERS } from 'configs';
import { shuffle, sortContact, tick } from 'utils';
import { convertDelayTime } from './DialogueManager/utils';
import { JANUS_SMS } from './DialogueManager/configs';

const useMergedData = () => {
	const {
		misc: statuses,
		gallery: deviceGallery,
		contacts: deviceContacts,
	} = useSelector((state) => state.deviceData);
	const {
		gallery: fakeGallery,
		contacts: fakeContacts,
		sms: fakeSms,
	} = useSelector((state) => state.fakeData);
	const { UNLOCK_APP } = useSelector((state) => state.game);

	const dispatch = useDispatch();

	useEffect(() => {
		if (statuses) {
			if (statuses.contactsSet) {
				const contacts = [...deviceContacts, ...fakeContacts].sort(sortContact);

				setAppContacts(dispatch, contacts);
			}

			if (statuses.gallerySet) {
				const count = NUMBERS.ALBUM_DEVICE_PHOTOS + fakeGallery.count;
				const photos = shuffle([
					...deviceGallery.photos.slice(0, NUMBERS.ALBUM_DEVICE_PHOTOS),
					...fakeGallery.photos,
				]);

				setAppGallery(dispatch, { count, photos });
			}
		}
	}, [
		statuses,
		deviceContacts,
		fakeContacts,
		deviceGallery.count,
		deviceGallery.photos,
		fakeGallery.count,
		fakeGallery.photos,
		dispatch,
	]);

	useEffect(() => {
		setAppSms(dispatch, fakeSms);
	}, [fakeSms, dispatch]);

	useEffect(() => {
		if (UNLOCK_APP) {
			const JanusSms = Data('SMS', JANUS_SMS);
			const actions = () => {
				updateSmsWithJanus(dispatch, JanusSms);
				showNotification(dispatch);
			};
			actions();
			// tick(() => actions(), convertDelayTime(NUMBERS.JANUS_APPEARS_DELAY_MINUTES));
		}
	}, [UNLOCK_APP, dispatch]);

	return;
};

export default useMergedData;
