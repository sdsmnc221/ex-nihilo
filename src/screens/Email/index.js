import React, { useState } from 'react';
import styled from 'styled-components';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import AddButton from 'sharedUI/Button/AddButton';
import IconButton from 'sharedUI/Button/IconButton';
import EmailShort from './components/EmailShort';

import { random } from 'utils';

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

const EmailScreen = ({ route, navigation }) => {
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
				'Hello Dear,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex.\n\nUt leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.\n\nSee u soon Sam',
			starred: true,
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
		<LayoutWrapper screenName={route.name}>
			<ScrollView contentContainerStyle={styles.scrollBody}>
				<Header>
					<SearchBar>
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

						<IconButton type="HAMBURGER" additionalStyles={styles.settingsIcon} />
						<IconButton type="SEARCH" additionalStyles={styles.searchIcon} />
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
							starred={e.starred !== undefined ? e.starred : random(0.32)}
							onPress={() => navigation.navigate('EmailDetailsScreen', { email: e })}
						/>
					))}
				</Inbox>
			</ScrollView>
			<AddButton />
		</LayoutWrapper>
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
