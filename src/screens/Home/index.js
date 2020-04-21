import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components';

import Clock from 'sharedUI/Clock';
import AppIcon from 'sharedUI/AppIcon/';
import NavigationBar from 'sharedUI/NavigationBar';

const Icons = styled.View`
	position: absolute;
	bottom: 90px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const IconsTemp = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const HomeScreen = ({ navigation }) => {
	const deviceW = Dimensions.get('window').width;
	const iconSize = (deviceW - 12) / 5 - 12;

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<Clock />
					<Icons>
						<AppIcon size={iconSize} type="PHONE" notifs={24} />
						<AppIcon
							size={iconSize}
							type="SMS"
							notifs={8}
							onPress={() => navigation.navigate('SmsScreen')}
						/>
						<AppIcon size={iconSize} type="APPS" />
						<AppIcon
							size={iconSize}
							type="CONTACTS"
							onPress={() => navigation.navigate('ContactsScreen')}
						/>
						<AppIcon size={iconSize} type="FILES" />
					</Icons>
					{/* Temporary App Icons */}
					<IconsTemp>
						<AppIcon
							size={iconSize}
							label="Album"
							onPress={() => navigation.navigate('AlbumScreen')}
						/>
						<AppIcon
							size={iconSize}
							label="Facebook"
							onPress={() => navigation.navigate('FacebookLoginScreen')}
						/>
						<AppIcon
							size={iconSize}
							label="Email"
							onPress={() => navigation.navigate('EmailLoginScreen')}
						/>
						<AppIcon size={iconSize} label="Agenda" />
						<AppIcon size={iconSize} label="Notes" />
					</IconsTemp>
					{/* Temporary App Icons */}
				</View>
				<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} />
			</SafeAreaView>
		</>
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
