import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import NavigationBar from '../../sharedUI/NavigationBar';
import AddButton from '../../sharedUI/Button/AddButton';
import Icon from '../../sharedUI/Icon';
import EmailShort from '../../sharedUI/EmailShort';

const Header = styled.View`
	width: 100%;
	height: 120px;
	background-color: #fff;
	padding: 24px;
	justify-content: space-between;
`;

const Row = styled.View`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	flex-direction: row;
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
	margin-bottom: 48px;
`;

const SettingsIcon = () => (
	<View style={styles.settingsIcon}>
		<Icon type="HAMBURGER" />
	</View>
);

const SearchIcon = () => (
	<View style={styles.searchIcon}>
		<Icon type="SEARCH" />
	</View>
);

const EmailScreen = ({ navigation }) => {
	const searchPlaceHolder = 'Rechercher dans messages...';
	const [searchValue, setSearchValue] = useState(searchPlaceHolder);
	const onSearchSubmit = () => {};

	const emails = [
		{
			sender: 'Marie Dupont',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Anynomous',
			date: '17 févr.',
			title: 'Hello Sam',
			message:
				'Hello dear, je ne me présenterai pas mais nous orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Ludovic Poiret',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Catherine Mont',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Erick Paulin',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Henry Petit',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Henry Petit',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Anne Marie Parisi',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Ludovic Poiret',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Catherine Mont',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
		{
			sender: 'Erick Paulin',
			date: '17 févr.',
			title: 'Objet du mail ici',
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo.',
		},
	];

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<ScrollView contentContainerStyle={styles.scrollBody}>
						<Header>
							<SearchBar>
								<SettingsIcon />
								<SearchIcon />
								<SearchInput
									value={searchValue}
									blurOnSubmit
									clearTextOnFocus
									onFocus={() => setSearchValue('')}
									onSubmitEditing={onSearchSubmit}
									onEndEditing={() =>
										searchValue === '' && setSearchValue(searchPlaceHolder)
									}
									onChangeText={(text) => setSearchValue(text)}
								/>
							</SearchBar>
							<Title>Boîte de réception</Title>
						</Header>
						<Inbox>
							{emails.map((e, i) => (
								<EmailShort
									key={i}
									sender={e.sender}
									date={e.date}
									title={e.title}
									message={e.message}
								/>
							))}
						</Inbox>
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

export default EmailScreen;
