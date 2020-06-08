import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	setAppContacts,
	setAppGallery,
} from 'states/actions/mergedDataActions';

import { NUMBERS } from 'configs';
import { shuffle, sortContact } from 'utils';

const useMergedData = () => {
	const {
		misc: statuses,
		gallery: deviceGallery,
		contacts: deviceContacts,
	} = useSelector((state) => state.deviceData);
	const { gallery: fakeGallery, contacts: fakeContacts } = useSelector(
		(state) => state.fakeData
	);

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

	return;
};

export default useMergedData;
