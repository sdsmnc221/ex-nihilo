import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import { View, Text } from 'react-native';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

const Wrapper = styled.View`
	padding-right: 10px;
	height: 30px;
	position: absolute;
	top: 0;
	${({ theme }) => theme.styles.flex('flex-end', null, 'row', true)}
`;

const Clock = styled.Text`
	font-family: ${({ theme }) => theme.fonts.cairo.semiBold};
	font-size: ${({ theme }) => theme.typo.sizes.body};
	color: ${({ whiteText, theme }) =>
		whiteText ? theme.colors.white : theme.colors.whiskey};
	top: 1px;
	margin-left: 10px;
`;

const StatusBar = ({ light, whiteText, theme }) => {
	return (
		<Wrapper>
			<StyledIcon type="WIFI_LIGHT" />
			<StyledIcon type="CELLULAR_LIGHT" />
			<StyledIcon
				type="BATTERY_LIGHT"
				additionalStyle={`
					${css`
						margin-left: 8px;
					`}
				`}
			/>
			<Clock whiteText={whiteText}>13:52</Clock>
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
