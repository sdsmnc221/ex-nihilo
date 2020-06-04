import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import HeaderSearchBar from './components/HeaderSearchBar';

const Wrapper = styled.View`
    position: relative;
	z-index: 999;
	${({ theme }) => theme.styles.flex('flex-start', null, null, true)}
    background-color: ${({ theme }) => theme.colors.ghostWhite};
`;

const Title = styled.Text`
	width: 100%;
	padding: 16px 20px;
	background-color: ${({ theme }) => theme.colors.persianRed};
	color: ${({ theme }) => theme.colors.ghostWhite};
	font-family: ${({ theme }) => theme.fonts.cairo.semiBold};
	font-size: 17px;
	letter-spacing: 0.34px;
	text-transform: lowercase;
`;

const EmailInboxHeader = ({ theme, title }) => (
	<Wrapper>
		<HeaderSearchBar />
		{title && <Title>{title}</Title>}
	</Wrapper>
);
EmailInboxHeader.propTypes = {
	title: PropTypes.string,
};

EmailInboxHeader.defaultProps = {
	title: null,
};

export default withTheme(EmailInboxHeader);
