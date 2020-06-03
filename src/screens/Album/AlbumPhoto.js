import React from 'react';
import { Image } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

import { device } from 'utils';

const AlbumPhotoScreen = ({ route }) => {
	const { uri } = route.params;
	const { width, height } = device();

	return (
		<LayoutWrapper screenName={route.name}>
			<Image
				style={{
					width,
					height,
				}}
				source={{ uri }}
				resizeMode="contain"
			/>
		</LayoutWrapper>
	);
};

export default AlbumPhotoScreen;
