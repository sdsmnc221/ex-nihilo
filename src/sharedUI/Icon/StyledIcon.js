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

const StyledIcon = ({ type, size, additionalStyle, color }) => (
	<Wrapper
		size={size}
		css={`
			${additionalStyle}
		`}>
		<Icon type={type} color={color} />
	</Wrapper>
);

StyledIcon.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.number,
	additionalStyle: PropTypes.string,
};

StyledIcon.defaultProps = {
	size: null,
	additionalStyle: null,
};

export default StyledIcon;
