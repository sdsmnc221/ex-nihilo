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
	size,
	onPress,
	pressOpacity,
	noBlink,
	additionalStyles,
	additionalStyle,
	...iconProps
}) => (
	<Wrapper
		size={size}
		onPress={onPress}
		activeOpacity={noBlink ? 1.0 : pressOpacity}
		style={additionalStyles}
		css={additionalStyle}>
		<Icon {...iconProps} />
	</Wrapper>
);

IconButton.propTypes = {
	size: PropTypes.number,
	onPress: PropTypes.func,
	pressOpacity: PropTypes.number,
	noBlink: PropTypes.bool,
	additionalStyles: PropTypes.object,
	additionalStyle: PropTypes.string,
};

IconButton.defaultProps = {
	size: undefined,
	onPress: () => {},
	noBlink: false,
	pressOpacity: 0.8,
	additionalStyles: {},
	additionalStyle: null,
};

export default IconButton;
