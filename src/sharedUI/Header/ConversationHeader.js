import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import HeaderRight from './HeaderRight';
import HeaderShadow from './components/HeaderShadow';

import { device } from 'utils';
import { HEADER_OPTIONS } from './configs';

const Wrapper = styled.View`
    position: relative;
	${({ theme }) => theme.styles.flex('flex-start', null, 'row', true)}
	min-height: ${device().height * HEADER_OPTIONS.minHeight}px;
    padding-left: ${HEADER_OPTIONS.padding.left}px;
    padding-right: ${HEADER_OPTIONS.padding.right}px;
    margin-bottom: ${HEADER_OPTIONS.extraGap}px;
    background-color: ${({ theme }) => theme.colors.ghostWhite};
`;

const Title = styled.Text`
    ${({ theme }) => theme.styles.os.h1}
    color: ${({ theme }) => theme.colors.whiskey};
    letter-spacing: 1.6px;
`;

const ConversationHeader = ({ theme, title, ...otherConfigs }) => {
	const { screen, headerLeft, headerRight, headerShadow } = otherConfigs;
	return (
		<Wrapper>
			{headerShadow && <HeaderShadow />}
			{title && <Title>{title}</Title>}
			{headerRight && <HeaderRight type={screen} />}
		</Wrapper>
	);
};

ConversationHeader.propTypes = {
	title: PropTypes.string,
};

ConversationHeader.defaultProps = {
	title: null,
};

export default withTheme(ConversationHeader);
