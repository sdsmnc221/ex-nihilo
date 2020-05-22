import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

import BG_HOMESCREEN from 'assets/images/BG-HomeScreen.png';

import BackgroundImage from 'sharedUI/BackgroundImage';
import Clock from 'sharedUI/Clock';
import AppIcon from 'sharedUI/AppIcon/';
import NavigationBar from 'sharedUI/NavigationBar';

import { colors } from 'configs/theme';

const Icons = styled.View`
	position: absolute;
	bottom: 90px;
	width: 96%;
	padding: 12px;
	border-radius: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${colors.ghostWhite};
`;

const IconsTemp = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const HomeScreen = ({ navigation }) => {
	const deviceW = Dimensions.get('window').width;
	const iconSize = ((deviceW - 12) / 5 - 12) * 0.9;

	return (
		<SafeAreaView>
			<View style={styles.body}>
				<BackgroundImage source={BG_HOMESCREEN} />
				<Clock />
				<Icons>
					<AppIcon size={iconSize} type="PHONE" notifs={24} />
					<AppIcon
						size={iconSize}
						type="SMS"
						notifs={8}
						onPress={() => navigation.navigate('SmsScreen')}
					/>
					<AppIcon
						size={iconSize}
						type="APPS"
						onPress={() => navigation.navigate('AllApps')}
					/>
					<AppIcon
						size={iconSize}
						type="CONTACTS"
						onPress={() => navigation.navigate('ContactsScreen')}
					/>
					<AppIcon size={iconSize} type="FILES" />
				</Icons>

				<IconsTemp>
					<AppIcon
						size={iconSize}
						type="STAR"
						notifs={8}
						onPress={() => navigation.navigate('FacebookLoginScreen')}
					/>
					<AppIcon
						size={iconSize}
						type="EMAIL"
						onPress={() => navigation.navigate('EmailLoginScreen')}
					/>
					<AppIcon
						size={iconSize}
						type="ALBUM"
						onPress={() => navigation.navigate('AlbumScreen')}
					/>
					<AppIcon
						size={iconSize}
						type="STAR"
						onPress={() => navigation.navigate('TypoScreen')}
					/>
					<AppIcon size={iconSize} type="STAR" />
				</IconsTemp>
			</View>
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#c4c4c4',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default HomeScreen;
