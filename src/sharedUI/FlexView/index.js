import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.View`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	flex-direction: ${({ dir }) => dir};
	justify-content: ${({ justify }) => justify || 'center'};
	align-items: ${({ align }) => align || 'center'};
`;

const FlexView = ({ fullWidth, dir, justify, align, children }) => (
	<Wrapper fullWidth={fullWidth} dir={dir} justify={justify} align={align}>
		{children}
	</Wrapper>
);

FlexView.propTypes = {
	fullWidth: PropTypes.bool,
	dir: PropTypes.string.isRequired,
	justify: PropTypes.string,
	align: PropTypes.string,
};

FlexView.defaultProps = {
	fullWidth: false,
	justify: undefined,
	align: undefined,
};

export default FlexView;
