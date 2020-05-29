import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { View } from 'react-native';

import Icon from 'sharedUI/Icon';
import IconButton from 'sharedUI/Button/IconButton';

const Wrapper = styled.View`
	${({ theme }) => theme.styles.flex('space-between', null, 'row', true)}
	padding: 0 72px;
	height: 50px;
	position: absolute;
	bottom: 0;
	background-color: ${({ transparent, theme }) =>
		transparent ? 'transparent' : theme.colors.white};
`;

const NavigationBar = ({ onPressHome, black, transparent, theme }) => {
	const { whiskey, white } = theme.colors;

	return (
		<Wrapper transparent={transparent}>
			<Icon type="NAVIGATION_BACK" color={black ? whiskey : white} />
			<IconButton
				type="NAVIGATION_HOME"
				color={black ? whiskey : white}
				onPress={onPressHome}
			/>
			<Icon type="NAVIGATION_GLITCH" color={black ? whiskey : white} />
		</Wrapper>
	);
};

NavigationBar.propTypes = {
	onPressHome: PropTypes.func.isRequired,
	black: PropTypes.bool,
	transparent: PropTypes.bool,
};

NavigationBar.defaultProps = {
	onPressHome: () => {},
	black: false,
	transparent: false,
};

export default withTheme(NavigationBar);
