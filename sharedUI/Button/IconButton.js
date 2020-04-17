import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from '../Icon';

const Wrapper = styled.TouchableOpacity`
	width: ${({ size }) => (size ? `${size}px` : 'auto')};
	height: ${({ size }) => (size ? `${size}px` : 'auto')};
	justify-content: center;
	align-items: center;
`;

const IconButton = ({
	type,
	size,
	onPress,
	pressOpacity,
	additionalStyles,
}) => (
	<Wrapper
		size={size}
		onPress={onPress}
		activeOpacity={pressOpacity}
		style={additionalStyles}>
		<Icon type={type} />
	</Wrapper>
);

IconButton.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.number,
	onPress: PropTypes.func,
	pressOpacity: PropTypes.number,
	additionalStyles: PropTypes.object,
};

IconButton.defaultProps = {
	size: undefined,
	onPress: () => {},
	pressOpacity: 0.2,
	additionalStyles: {},
};

export default IconButton;
