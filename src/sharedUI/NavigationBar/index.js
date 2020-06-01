import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import Icon from 'sharedUI/Icon';
import IconButton from 'sharedUI/Button/IconButton';

const Wrapper = styled.View`
	${({ theme }) => theme.styles.flex('space-between', null, 'row', true)}
	padding: 0 72px;
	height: 50px;
	position: absolute;
	z-index: 99;
	bottom: 0;
	background-color: ${({ transparentBG, theme }) =>
		transparentBG ? 'transparent' : theme.colors.white};
`;

const NavigationBar = ({ transparentButtons, transparentBG, theme }) => {
	const { whiskey, white } = theme.colors;
	const navigation = useNavigation();

	const onPressBack = () => navigation.goBack();
	const onPressHome = () => navigation.navigate('HomeScreen');

	return (
		<Wrapper transparentBG={transparentBG}>
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
			<Icon
				type="NAVIGATION_GLITCH"
				color={transparentButtons ? white : whiskey}
			/>
		</Wrapper>
	);
};

NavigationBar.propTypes = {
	transparentButtons: PropTypes.bool,
	transparentBG: PropTypes.bool,
};

NavigationBar.defaultProps = {
	transparentButtons: false,
	transparentBG: false,
};

export default withTheme(NavigationBar);
