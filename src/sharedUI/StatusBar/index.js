import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import { View, Text } from 'react-native';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { SIZES } from 'configs';

const Wrapper = styled.View`
	padding-right: 10px;
	height: ${SIZES.STT_BAR_H}px;
	position: absolute;
	z-index: 99;
	top: 0;
	${({ theme }) => theme.styles.flex('flex-end', null, 'row', true)}
`;

const Clock = styled.Text`
	font-family: ${({ light, theme }) =>
		light ? theme.fonts.cairo.semiBold : theme.fonts.superclarendon};
	font-size: ${({ theme }) => theme.typo.sizes.body};
	letter-spacing: ${({ light }) => (light ? 0 : -1)}px;
	color: ${({ whiteText, theme }) =>
		whiteText ? theme.colors.white : theme.colors.whiskey};
	top: 1px;
	margin-left: 10px;
`;

const StatusBar = ({ light, whiteText }) => {
	return (
		<Wrapper>
			<StyledIcon type={`WIFI_${light ? 'LIGHT' : 'DARK'}`} />
			<StyledIcon type={`CELLULAR_${light ? 'LIGHT' : 'DARK'}`} />
			<StyledIcon
				type={`BATTERY_${light ? 'LIGHT' : 'DARK'}`}
				additionalStyle={css`
					margin-left: 8px;
				`}
			/>
			<Clock whiteText={whiteText} light={light}>
				13:52
			</Clock>
		</Wrapper>
	);
};

StatusBar.propTypes = {
	light: PropTypes.bool,
	whiteText: PropTypes.bool,
};

StatusBar.defaultProps = {
	light: false,
	whiteText: true,
};

export default withTheme(StatusBar);
