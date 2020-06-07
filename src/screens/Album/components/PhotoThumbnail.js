import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { Image } from 'react-native';
import {
	ColorMatrix,
	concatColorMatrices,
	saturate,
	warm,
	cool,
	kodachrome,
} from 'react-native-color-matrix-image-filters';

import HeartButton from 'sharedUI/Button/HeartButton';
import { random } from '../../../utils';

const Wrapper = styled.TouchableOpacity`
	position: relative;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
`;

const PhotoThumbnail = ({ isDevicePhoto, size, source, onPress, theme }) => (
	<Wrapper size={size} onPress={onPress} activeOpacity={0.8}>
		{isDevicePhoto ? (
			<ColorMatrix
				matrix={concatColorMatrices([
					saturate(2.4),
					random() ? warm() : cool(),
					kodachrome(),
				])}>
				<Image
					style={[
						{
							width: size,
							height: size,
						},
						theme.styles.styleSheet.flipX,
					]}
					source={source}
					blurRadius={0.4}
				/>
			</ColorMatrix>
		) : (
			<Image
				style={{
					width: size,
					height: size,
				}}
				source={source}
			/>
		)}

		<HeartButton
			initialActive={true}
			additionalStyle={css`
				position: absolute;
				top: 8px;
				left: 8px;
			`}
			width={18}
			height={18}
		/>
	</Wrapper>
);

PhotoThumbnail.propTypes = {
	isDevicePhoto: PropTypes.bool,
	size: PropTypes.number.isRequired,
	source: PropTypes.object.isRequired,
	onPress: PropTypes.func,
};

PhotoThumbnail.defaultProps = {
	isDevicePhoto: false,
	onPress: () => {},
};

export default withTheme(PhotoThumbnail);
