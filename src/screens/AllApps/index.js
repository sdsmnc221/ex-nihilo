import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components';

import AppIcon from 'sharedUI/AppIcon/';
import NavigationBar from 'sharedUI/NavigationBar';

const Icons = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin-top: 48px;
`;

const AllApps = ({ navigation }) => {
	const deviceW = Dimensions.get('window').width;
	const iconSize = (deviceW - 12) / 5 - 12;
	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<Icons style={styles.firstChild}>
						<AppIcon label="Appels" size={iconSize} type="PHONE" notifs={24} />
						<AppIcon label="Calendrier" size={iconSize} />
						<AppIcon
							label="Contact"
							size={iconSize}
							type="CONTACTS"
							onPress={() => navigation.navigate('ContactsScreen')}
						/>
					</Icons>
					<Icons>
						<AppIcon
							label="Facebook"
							size={iconSize}
							onPress={() => navigation.navigate('FacebookLoginScreen')}
						/>
						<AppIcon
							label="Galerie"
							size={iconSize}
							onPress={() => navigation.navigate('AlbumScreen')}
						/>
						<AppIcon label="Internet" size={iconSize} />
					</Icons>
					<Icons>
						<AppIcon
							label="Mail"
							size={iconSize}
							type="EMAIL"
							onPress={() => navigation.navigate('EmailLoginScreen')}
						/>
						<AppIcon
							label="Messages"
							size={iconSize}
							type="SMS"
							onPress={() => navigation.navigate('SmsScreen')}
						/>
						<AppIcon label="Mes notes" size={iconSize} />
					</Icons>
					<Icons>
						<AppIcon
							label="Typography"
							size={iconSize}
							type="STAR"
							onPress={() => navigation.navigate('TypoScreen')}
						/>
						<AppIcon size={iconSize} type="STAR" />
						<AppIcon size={iconSize} type="STAR" />
					</Icons>
					<Icons>
						<AppIcon size={iconSize} type="STAR" />
						<AppIcon size={iconSize} type="STAR" />
						<AppIcon size={iconSize} type="STAR" />
					</Icons>
					<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} />
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#c4c4c4',
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	firstChild: {
		marginTop: 72,
	},
});

export default AllApps;
