import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import IconButton from 'sharedUI/Button/IconButton';

import { SIZES } from 'configs';

import { activateSmallGlitch } from 'states/actions/gameActions';

const Wrapper = styled.View`
	${({ theme }) => theme.styles.flex('space-between', null, 'row', true)}
	padding: 0 72px;
	height: ${SIZES.NAV_BAR_H}px;
	position: absolute;
	z-index: 99;
	bottom: 0;
	background-color: ${({ transparentBG, blackBG, theme }) =>
		transparentBG
			? 'transparent'
			: blackBG
			? theme.colors.black
			: theme.colors.white};
`;

const NavigationBar = ({
	transparentButtons,
	transparentBG,
	blackBG,
	theme,
}) => {
	const { whiskey, white } = theme.colors;

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const onPressBack = () => navigation.goBack();
	const onPressHome = () => navigation.navigate('HomeScreen');
	const onPressGlitch = () => activateSmallGlitch(dispatch);

	return (
		<Wrapper transparentBG={transparentBG} blackBG={blackBG}>
			<IconButton
				type="NAVIGATION_BACK"
				color={transparentButtons ? white : whiskey}
				onPress={onPressBack}
			/>
			<IconButton
				type="NAVIGATION_HOME"
				color={transparentButtons ? white : whiskey}
				onPress={onPressHome}
			/>
			<IconButton
				type="NAVIGATION_GLITCH"
				color={transparentButtons ? white : whiskey}
				onPress={onPressGlitch}
			/>
		</Wrapper>
	);
};

NavigationBar.propTypes = {
	transparentButtons: PropTypes.bool,
	transparentBG: PropTypes.bool,
	blacktBG: PropTypes.bool,
};

NavigationBar.defaultProps = {
	transparentButtons: false,
	transparentBG: false,
	blackBG: false,
};

export default withTheme(NavigationBar);
