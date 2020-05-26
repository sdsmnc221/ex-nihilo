import React from 'react';
import styled, { withTheme } from 'styled-components';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BG_HOMESCREEN from 'assets/images/BG-HomeScreen.png';

import BackgroundImage from 'sharedUI/BackgroundImage';
import Clock from 'sharedUI/Clock';
import AppIcon from 'sharedUI/AppIcon/';
import NavigationBar from 'sharedUI/NavigationBar';

import { device } from 'utils';
import { APP_ICON } from 'configs/constants';

const {
	ICONS_TRAY_WIDTH,
	ICONS_TRAY_WIDTH_NB,
	ICONS_TRAY_MARGE,
	ICONS_COUNT,
	ICON_MARGE,
	RATIO,
} = APP_ICON;

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
	const { width: deviceW } = device();
	const iconSize =
		((deviceW * ICONS_TRAY_WIDTH_NB - ICONS_TRAY_MARGE * 2) / ICONS_COUNT -
			ICON_MARGE) *
		RATIO;

	return (
		<SafeAreaView>
			<View
				css={`
					${theme.styles.body()}
				`}>
				<BackgroundImage source={BG_HOMESCREEN} />
				<Clock />
				<Icons>
					<AppIcon size={iconSize} type="PHONE" notifs={24} withSpacing />
					<AppIcon
						size={iconSize}
						type="SMS"
						notifs={8}
						onPress={() => navigation.navigate('SmsScreen')}
						withSpacing
					/>
					<AppIcon
						size={iconSize}
						type="APPS"
						onPress={() => navigation.navigate('AllApps')}
						withSpacing
					/>
					<AppIcon
						size={iconSize}
						type="CONTACTS"
						onPress={() => navigation.navigate('ContactsScreen')}
						withSpacing
					/>
					<AppIcon
						size={iconSize}
						type="ALBUM"
						onPress={() => navigation.navigate('AlbumScreen')}
						withSpacing
					/>
				</Icons>
			</View>
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} />
		</SafeAreaView>
	);
};

export default withTheme(HomeScreen);
