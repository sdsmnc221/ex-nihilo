import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.TouchableOpacity`
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
