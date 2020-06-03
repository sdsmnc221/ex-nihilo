import React, { useRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { Text, SectionList } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import SmsMessage from './components/SmsMessage';
import SmsInput from './components/SmsInput';
import Unscrollable from './components/Unscrollable';
import FillGap from 'sharedUI/FillGap';

const Date = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.sourceSans.regular};
	font-size: 12px;
	text-transform: uppercase;
	text-align: center;
	margin: 16px 0;
`;

const smsList = [
	{
		title: '',
		data: [
			{
				message: 'Sam tout va bien ?',
			},
			{
				message: 'Sam décroche !',
				withAvatar: true,
			},
			{
				message: '👍',
				isUser: true,
			},
			{
				message: 'Qu’est-ce qu’il se passe ?',
				withAvatar: true,
			},
		],
	},
	{
		title: '12 Avril, 14:21',
		data: [
			{
				message: 'Hello',
			},
			{
				message:
					'Je vais envoyer un mail de rappel à toute l’équipe pour que personne n’oublie',
				withAvatar: true,
			},
			{
				message: '👍',
				isUser: true,
			},
		],
	},
	{
		title: '13 Avril, 14:21',
		data: [
			{
				message: 'Salut Sam, est-ce que ça va? tu ne viens pas aujourd’hui ?',
				withAvatar: true,
			},
		],
	},
	{
		title: '14 Avril, 14:21',
		data: [
			{
				message:
					'Hello Sam, tu n’est pas venu hier non plus est-ce que tout va bien ?',
			},
			{
				message:
					'Si tu es malade il faudrait que tu nous fasses parvenir ton arrêt maladie au plus vite.',
			},
			{
				message: 'Qu’est-ce qu’il se passe ?',
				withAvatar: true,
			},
		],
	},
];

const SmsConversationScreen = ({ route, navigation, theme }) => {
	const { headerTitle } = route.params;

	const smsListRef = useRef(null);

	return (
		<LayoutWrapper screenName={route.name} headerTitle={headerTitle}>
			<SectionList
				ref={smsListRef}
				css={`
					${theme.styles.list}
				`}
				sections={smsList}
				keyExtractor={(item, index) => index.toString()}
				onScrollToIndexFailed={() => {}}
				onContentSizeChange={() =>
					smsListRef.current &&
					smsListRef.current.scrollToLocation({ sectionIndex: 3, itemIndex: 2 })
				}
				renderSectionHeader={({ section: { title } }) =>
					title ? <Date>{title}</Date> : null
				}
				renderItem={({ item: sms }) => (
					<SmsMessage
						message={sms.message}
						withAvatar={sms.withAvatar}
						isUser={sms.isUser}
					/>
				)}
				ListHeaderComponent={<Unscrollable />}
				ListFooterComponent={<FillGap height={18} />}
			/>
			<SmsInput />
			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(SmsConversationScreen);
