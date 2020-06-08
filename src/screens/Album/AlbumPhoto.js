import React from 'react';
import { Image } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

import { device } from 'utils';

const AlbumPhotoScreen = ({ route }) => {
	const { source } = route.params;
	const { width, height } = device();

	return (
		<LayoutWrapper screenName={route.name}>
			<Image
				style={{
					width,
					height,
				}}
				source={source}
				resizeMode="contain"
			/>
		</LayoutWrapper>
	);
};

export default AlbumPhotoScreen;
