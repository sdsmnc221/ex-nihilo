import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

import Icon from '../Icon';
import IconButton from '../Button/IconButton';

const Wrapper = styled.View`
	width: 100%;
	height: 40px;
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: ${({ black }) => (black ? '#565656' : 'transparent')};
`;

const NavigationBar = ({ onPressHome, black }) => (
	<Wrapper black={black}>
		<Icon type="NAVIGATION_BACK" />
		<IconButton type="NAVIGATION_HOME" onPress={onPressHome} />
		<Icon type="NAVIGATION_APP" />
	</Wrapper>
);

NavigationBar.propTypes = {
	onPressHome: PropTypes.func.isRequired,
	black: PropTypes.bool,
};

NavigationBar.defaultProps = {
	onPressHome: () => {},
	black: false,
};

export default NavigationBar;
