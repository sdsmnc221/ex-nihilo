import React from 'react';
import styled, { withTheme } from 'styled-components';

import { device, rgba } from 'utils';
import { HEADER_OPTIONS } from '../configs';

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

const HeaderShadow = ({ theme }) => (
	<>
		<ShadowBorderLine />
		<Shadow style={theme.shadows.header} />
	</>
);

export default withTheme(HeaderShadow);
