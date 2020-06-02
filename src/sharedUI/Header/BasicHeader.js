import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import HeaderRight from './HeaderRight';

import { device, rgba } from 'utils';
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

const ShadowBorderLine = styled.View`
	position: absolute;
	width: ${device().width}px;
	height: 1px;
	bottom: ${-HEADER_OPTIONS.extraGap + 2}px;
	background-color: ${({ theme }) => rgba(theme.colors.whiteAlpha, 0.6)};
`;

const Shadow = styled.View`
	position: absolute;
	width: ${device().width}px;
	height: 1px;
	bottom: ${-HEADER_OPTIONS.extraGap}px;
	background-color: ${({ theme }) => rgba(theme.colors.whiteAlpha, 0)};
	opacity: 0.6;
`;

const Title = styled.Text`
    ${({ theme }) => theme.styles.os.h1}
    color: ${({ theme }) => theme.colors.whiskey};
    letter-spacing: 1.6px;
`;

const BasicHeader = ({ theme, title, ...otherConfigs }) => {
	const { screen, headerLeft, headerRight, headerShadow } = otherConfigs;
	return (
		<Wrapper>
			{headerShadow && (
				<>
					<ShadowBorderLine />
					<Shadow style={theme.shadows.header} />
				</>
			)}

			{title && <Title>{title}</Title>}
			{headerRight && <HeaderRight type={screen} />}
		</Wrapper>
	);
};

BasicHeader.propTypes = {
	title: PropTypes.string,
};

BasicHeader.defaultProps = {
	title: null,
};

export default withTheme(BasicHeader);
