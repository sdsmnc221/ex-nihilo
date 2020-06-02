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

const StyledIcon = ({ size, additionalStyle, ...iconProps }) => (
	<Wrapper
		size={size}
		css={`
			${additionalStyle}
		`}>
		<Icon {...iconProps} />
	</Wrapper>
);

StyledIcon.propTypes = {
	size: PropTypes.number,
	additionalStyle: PropTypes.string,
};

StyledIcon.defaultProps = {
	size: null,
	additionalStyle: null,
};

export default StyledIcon;
