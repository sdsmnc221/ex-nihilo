import React from 'react';
import styled, { withTheme } from 'styled-components';
import { View } from 'react-native';

import BG_HOMESCREEN from 'assets/images/BG-HomeScreen.png';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import BackgroundImage from 'sharedUI/BackgroundImage';
import Clock from 'sharedUI/Clock';
import AppIcon from 'sharedUI/AppIcon/';

import { getIconSize } from 'utils';
import { APP_ICON, HOME_APPS, SCREENS } from 'configs';

const { ICONS_TRAY_WIDTH, ICONS_TRAY_MARGE } = APP_ICON;

const Icons = styled.View`
	position: absolute;
	bottom: 64px;
	width: ${ICONS_TRAY_WIDTH}%;
	padding: ${ICONS_TRAY_MARGE}px;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	${({ theme }) => theme.styles.flexWithoutSize('space-around', null, 'row')}
`;

const HomeScreen = ({ navigation, theme }) => {
	const iconSize = getIconSize();

	const onPress = (screen) => navigation.navigate(screen);

	return (
		<LayoutWrapper screenName={SCREENS.HOME}>
			<View
				css={`
					${theme.styles.body()}
				`}>
				<BackgroundImage source={BG_HOMESCREEN} />
				<Clock />
				<Icons>
					{HOME_APPS.map((app, index) => (
						<AppIcon
							key={index}
							type={app.iconType}
							size={iconSize}
							notifs={app.notifs}
							{...app.screen && { onPress: () => onPress(app.screen) }}
							withSpacing
						/>
					))}
				</Icons>
			</View>
		</LayoutWrapper>
	);
};

export default withTheme(HomeScreen);
