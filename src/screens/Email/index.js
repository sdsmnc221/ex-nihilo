import React from 'react';
import { withTheme } from 'styled-components';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import EmailShort from './components/EmailShort';

import { random } from 'utils';
import { SCREENS } from 'configs';

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

const EmailScreen = ({ route, navigation, theme }) => (
	<LayoutWrapper screenName={route.name}>
		<FlatList
			css={`
				${theme.styles.list}
				padding-top: 20px;
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
			ListFooterComponent={<FillGap height={18} />}
		/>
		<FillGap />
	</LayoutWrapper>
);

export default withTheme(EmailScreen);
