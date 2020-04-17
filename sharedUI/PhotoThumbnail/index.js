import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PlaceHolder from '../PlaceHolder';

const Wrapper = styled.TouchableOpacity`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
`;

const PhotoThumbnail = ({ size, color, onPress }) => (
	<Wrapper size={size} onPress={onPress}>
		<PlaceHolder size={size} color={color} />
	</Wrapper>
);

PhotoThumbnail.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	onPress: PropTypes.func,
};

PhotoThumbnail.defaultProps = {
	size: 45,
	color: '#565656',
	onPress: () => {},
};

export default PhotoThumbnail;
