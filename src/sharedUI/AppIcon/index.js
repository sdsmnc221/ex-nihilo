import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NeuView } from 'utils/react-native-neu-element';

import Icon from 'sharedUI/Icon';

import { tick } from 'utils';
import { APP_ICON, STRINGS } from 'configs/constants';

const styledWrapper = css`
	position: relative;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border-radius: ${({ size }) => size}px;
	margin: ${({ withSpacing }) => (withSpacing ? '0 6px' : 0)};
	${({ theme }) => theme.styles.flexWithoutSize()}
`;

const Wrapper = styled.View`
	${styledWrapper}
`;

const TouchableWrapper = styled.TouchableOpacity`
	${styledWrapper}
`;

const NotifsCount = styled.Text`
	width: 20px;
	height: 20px;
	border-radius: 20px;
	position: absolute;
	right: -4px;
	top: -4px;
	text-align: center;
	line-height: 22px;
	background-color: ${({ theme }) => theme.colors.slateBlue};
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.styles.os.notifsCount}
	${({ theme }) => theme.styles.flexWithoutSize()}
`;

const Label = styled.Text`
	width: 200%;
	position: absolute;
	bottom: -24px;
	text-align: center;
	letter-spacing: 0.19px;
	${({ theme }) => theme.styles.os.subtitle};
	color: ${({ theme }) => theme.colors.charcoal};
`;

const AppIcon = ({
	type,
	label,
	notifs,
	size,
	onPress,
	noBlink,
	withSpacing,
	theme,
}) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress_ = () => setButtonPressed(!buttonPressed);

	useEffect(() => {
		if (buttonPressed) {
			onPress();
			tick(() => setButtonPressed(false), APP_ICON.RESET_PRESS_DURATION);
		}
	}, [buttonPressed, onPress]);

	return (
		<Wrapper size={size} withSpacing={withSpacing}>
			<NeuView
				color={theme.colors.ghostWhite}
				height={size}
				width={size}
				borderRadius={size}
				style={theme.shadows.default}
				inset={noBlink ? false : buttonPressed}>
				<TouchableWrapper
					size={size}
					onPress={onPress_}
					activeOpacity={noBlink ? 1.0 : 0.8}>
					{notifs > 0 && <NotifsCount>{notifs}</NotifsCount>}
					{type && (
						<Icon
							type={type + (!noBlink && buttonPressed ? STRINGS.ICON_PRESSED : '')}
						/>
					)}
					{label && <Label>{label}</Label>}
				</TouchableWrapper>
			</NeuView>
		</Wrapper>
	);
};

AppIcon.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	notifs: PropTypes.number,
	size: PropTypes.number,
	onPress: PropTypes.func,
	noBlink: PropTypes.bool,
	withSpacing: PropTypes.bool,
};

AppIcon.defaultProps = {
	type: undefined,
	label: undefined,
	notifs: 0,
	size: 45,
	onPress: () => {},
	noBlink: false,
	withSpacing: false,
};

export default withTheme(AppIcon);
