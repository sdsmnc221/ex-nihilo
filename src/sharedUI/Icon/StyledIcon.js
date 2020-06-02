import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

import Icon from 'sharedUI/Icon';

const Wrapper = styled.View`
	width: ${({ size }) => (size ? `${size}px` : 'auto')};
	height: ${({ size }) => (size ? `${size}px` : 'auto')};
	justify-content: center;
	align-items: center;
`;

const StyledIcon = ({ type, size, iconW, iconH, additionalStyle, color }) => (
	<Wrapper
		size={size}
		css={`
			${additionalStyle}
		`}>
		<Icon type={type} color={color} width={iconW} height={iconH} />
	</Wrapper>
);

StyledIcon.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.number,
	iconW: PropTypes.number,
	iconH: PropTypes.number,
	additionalStyle: PropTypes.string,
};

StyledIcon.defaultProps = {
	size: null,
	iconW: undefined,
	iconH: undefined,
	additionalStyle: null,
};

export default StyledIcon;
