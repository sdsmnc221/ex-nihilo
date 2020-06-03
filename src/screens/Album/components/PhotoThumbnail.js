import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Image } from 'react-native';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

const Wrapper = styled.TouchableOpacity`
	position: relative;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
`;

const PhotoThumbnail = ({ size, source, onPress }) => (
	<Wrapper size={size} onPress={onPress} activeOpacity={0.8}>
		<Image
			style={{
				width: size,
				height: size,
			}}
			source={source}
		/>
		<StyledIcon
			type="HEART_PRESSED"
			width={18}
			height={18}
			additionalStyle={css`
				position: absolute;
				top: 8px;
				left: 8px;
			`}
		/>
	</Wrapper>
);

PhotoThumbnail.propTypes = {
	size: PropTypes.number,
	source: PropTypes.object.isRequired,
	onPress: PropTypes.func,
};

PhotoThumbnail.defaultProps = {
	size: 45,
	onPress: () => {},
};

export default PhotoThumbnail;
