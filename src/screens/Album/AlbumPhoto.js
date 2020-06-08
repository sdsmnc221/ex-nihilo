import React from 'react';
import { withTheme } from 'styled-components';
import { Image } from 'react-native';
import {
	ColorMatrix,
	concatColorMatrices,
	saturate,
	warm,
	cool,
	kodachrome,
} from 'react-native-color-matrix-image-filters';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

import { device, random } from 'utils';

const AlbumPhotoScreen = ({ route, theme }) => {
	const { source, isFakePhoto } = route.params;
	const { width, height } = device();

	return (
		<LayoutWrapper screenName={route.name}>
			{isFakePhoto ? (
				<Image
					style={{
						width,
						height,
					}}
					source={source}
					resizeMode="contain"
				/>
			) : (
				<ColorMatrix
					matrix={concatColorMatrices([
						saturate(2.4),
						random() ? warm() : cool(),
						kodachrome(),
					])}>
					<Image
						style={[
							{
								width,
								height,
							},
							theme.styles.styleSheet.flipX,
						]}
						source={source}
						resizeMode="contain"
						blurRadius={1.2}
					/>
				</ColorMatrix>
			)}
		</LayoutWrapper>
	);
};

export default withTheme(AlbumPhotoScreen);
