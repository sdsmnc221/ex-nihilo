import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'sharedUI/Icon';

const Wrapper = styled.TouchableOpacity`
	position: relative;
	background-color: #e8e8e8;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border-radius: ${({ size }) => size}px;
	margin: 0 6px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NotifsCount = styled.Text`
	color: #c4c4c4;
	background-color: #565656;
	font-size: 11px;
	width: 18px;
	height: 18px;
	border-radius: 18px;
	position: absolute;
	right: 0;
	top: 0;
	text-align: center;
`;

const Label = styled.Text`
	text-align: center;
	font-size: 11px;
	color: #000;
	position: absolute;
	bottom: -24px;
`;

const AppIcon = ({ type, label, notifs, size, onPress }) => (
	<Wrapper size={size} onPress={onPress}>
		{notifs > 0 && <NotifsCount>{notifs}</NotifsCount>}
		{type && <Icon type={type} />}
		{label && <Label>{label}</Label>}
	</Wrapper>
);

AppIcon.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	notifs: PropTypes.number,
	size: PropTypes.number,
	onPress: PropTypes.func,
};

AppIcon.defaultProps = {
	type: undefined,
	label: undefined,
	notifs: 0,
	size: 45,
	onPress: () => {},
};

export default AppIcon;
