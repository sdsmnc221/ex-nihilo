import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'sharedUI/Icon';

const Wrapper = styled.TouchableOpacity`
	width: ${({ size }) => (size ? `${size}px` : 'auto')};
	height: ${({ size }) => (size ? `${size}px` : 'auto')};
	justify-content: center;
	align-items: center;
`;

const IconButton = ({
	type,
	size,
	iconW,
	iconH,
	onPress,
	pressOpacity,
	noBlink,
	additionalStyles,
	additionalStyle,
	color,
}) => (
	<Wrapper
		size={size}
		onPress={onPress}
		activeOpacity={noBlink ? 1.0 : pressOpacity}
		style={additionalStyles}
		css={additionalStyle}>
		<Icon type={type} color={color} width={iconW} height={iconH} />
	</Wrapper>
);

IconButton.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.number,
	iconW: PropTypes.number,
	iconH: PropTypes.number,
	onPress: PropTypes.func,
	pressOpacity: PropTypes.number,
	noBlink: PropTypes.bool,
	additionalStyles: PropTypes.object,
	additionalStyle: PropTypes.string,
	color: PropTypes.string,
};

IconButton.defaultProps = {
	size: undefined,
	iconW: undefined,
	iconH: undefined,
	onPress: () => {},
	noBlink: false,
	pressOpacity: 0.8,
	additionalStyles: {},
	additionalStyle: null,
	color: undefined,
};

export default IconButton;
