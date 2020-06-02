import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import { device, rgba } from 'utils';
import { HEADER_OPTIONS } from '../configs';

const ShadowBorderLine = styled.View`
	position: absolute;
	width: ${device().width}px;
	height: 1px;
	bottom: ${({ withoutExtraGap }) =>
		withoutExtraGap ? 0 : -HEADER_OPTIONS.extraGap + 2}px;
	background-color: ${({ theme }) => rgba(theme.colors.whiteAlpha, 0.6)};
`;

const Shadow = styled.View`
	position: absolute;
	width: ${device().width}px;
	height: 1px;
	bottom: ${({ withoutExtraGap }) =>
		withoutExtraGap ? 0 : -HEADER_OPTIONS.extraGap}px;
	background-color: ${({ theme }) => rgba(theme.colors.whiteAlpha, 0)};
	opacity: 0.6;
`;

const HeaderShadow = ({ theme, withoutExtraGap }) => (
	<>
		<ShadowBorderLine withoutExtraGap={withoutExtraGap} />
		<Shadow style={theme.shadows.header} withoutExtraGap={withoutExtraGap} />
	</>
);

HeaderShadow.propTypes = {
	withoutExtraGap: PropTypes.bool,
};

HeaderShadow.defautProps = {
	withoutExtraGap: false,
};

export default withTheme(HeaderShadow);
