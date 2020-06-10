import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	setAppContacts,
	setAppGallery,
	setAppSms,
} from 'states/actions/mergedDataActions';

import { NUMBERS } from 'configs';
import { shuffle, sortContact } from 'utils';

const useMergedData = () => {
	const {
		misc: statuses,
		gallery: deviceGallery,
		contacts: deviceContacts,
		sms: deviceSms,
	} = useSelector((state) => state.deviceData);
	const {
		gallery: fakeGallery,
		contacts: fakeContacts,
		sms: fakeSms,
	} = useSelector((state) => state.fakeData);

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

			if (statuses.smsSet) {
				const sms = [...deviceSms.list, ...fakeSms].sort(
					(a, b) => b.startDate - a.startDate
				);

				setAppSms(dispatch, sms);
			}
		}
	}, [
		statuses,
		deviceContacts,
		fakeContacts,
		deviceGallery.count,
		deviceGallery.photos,
		deviceSms,
		fakeGallery.count,
		fakeGallery.photos,
		fakeSms,
		dispatch,
	]);

	useEffect(() => {
		setAppSms(dispatch, fakeSms);
	}, [fakeSms, dispatch]);

	return;
};

export default useMergedData;
