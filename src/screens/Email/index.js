import React, { useState } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import IconButton from 'sharedUI/Button/IconButton';
import EmailShort from './components/EmailShort';

import { random } from 'utils';
import { SCREENS } from 'configs';

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

const settingsIcon = css`
	position: absolute;
	top: 12px;
	left: 12px;
`;

const searchIcon = css`
	position: absolute;
	top: 8px;
	right: 12px;
`;

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

const EmailScreen = ({ route, navigation, theme }) => {
	const searchPlaceHolder = 'Rechercher dans messages...';
	const [searchValue, setSearchValue] = useState(searchPlaceHolder);
	const onSearchSubmit = () => {};

	return (
		<LayoutWrapper screenName={route.name}>
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

					<IconButton type="HAMBURGER" additionalStyle={`${settingsIcon}`} />
					<IconButton type="SEARCH" additionalStyles={`${searchIcon}`} />
				</SearchBar>
				<Title>Boîte de réception</Title>
			</Header>
			<FlatList
				css={`
					${theme.styles.list}
				`}
				data={emails}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item: email }) => (
					<EmailShort
						sender={email.sender}
						date={email.date}
						title={email.title}
						message={email.message}
						starred={email.starred !== undefined ? email.starred : random(0.32)}
						onPress={() => navigation.navigate(SCREENS.EMAIL_DETAILS, { email })}
					/>
				)}
			/>
			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(EmailScreen);
