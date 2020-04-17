import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import NavigationBar from '../../sharedUI/NavigationBar';
import AddButton from '../../sharedUI/Button/AddButton';
import EmailShort from '../../sharedUI/EmailShort';

import { random } from '../../utils';
import IconButton from '../../sharedUI/Button/IconButton';

const Header = styled.View`
	width: 100%;
	height: 120px;
	background-color: #fff;
	padding: 24px;
	justify-content: space-between;
`;

const SearchBar = styled.View`
	position: relative;
	width: 100%;
	height: 35px;
	flex-direction: row;
	background-color: #c4c4c4;
`;

const SearchInput = styled.TextInput`
	width: 100%;
	height: 100%;
	color: #e5e5e5;
	font-size: 13px;
	padding: 0 48px;
`;

const Title = styled.Text`
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 1.6px;
`;

const Inbox = styled.View`
	width: 100%;
	background-color: #fff;
	margin-bottom: 108px;
`;

const EmailDetailsScreen = ({ route, navigation }) => {
	console.log(route);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<ScrollView contentContainerStyle={styles.scrollBody}>
						<Text>abc</Text>
					</ScrollView>
					<AddButton />
				</View>
				<NavigationBar
					onPressHome={() => navigation.navigate('HomeScreen')}
					black
				/>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	scrollBody: {
		backgroundColor: '#fff',
		width: '100%',
	},
	settingsIcon: {
		position: 'absolute',
		top: 12,
		left: 12,
	},
	searchIcon: {
		position: 'absolute',
		top: 8,
		right: 12,
	},
});

export default EmailDetailsScreen;
