import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setAppGallery } from 'states/actions/mergedDataActions';

import { NUMBERS } from 'configs';
import { shuffle } from 'utils';

const useMergedData = () => {
	const { misc: statuses, gallery: deviceGallery } = useSelector(
		(state) => state.deviceData
	);
	const { gallery: fakeGallery } = useSelector((state) => state.fakeData);

	const dispatch = useDispatch();

	useEffect(() => {
		if (statuses && statuses.gallerySet) {
			const count = NUMBERS.ALBUM_DEVICE_PHOTOS + fakeGallery.count;
			const photos = shuffle([
				...deviceGallery.photos.slice(0, NUMBERS.ALBUM_DEVICE_PHOTOS),
				...fakeGallery.photos,
			]);

			setAppGallery(dispatch, { count, photos });
		}
	}, [
		statuses,
		deviceGallery.count,
		deviceGallery.photos,
		fakeGallery.count,
		fakeGallery.photos,
		dispatch,
	]);

	return;
};

export default useMergedData;
