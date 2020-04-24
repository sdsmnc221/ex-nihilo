import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import styled from 'styled-components';

import NavigationBar from 'sharedUI/NavigationBar';
import SmsMessage from './components/SmsMessage';
import AnswerChoice from './components/AnswerChoice';
import SmsInput from './components/SmsInput';

const SmsList = styled.ScrollView`
	width: 100%;
	background-color: #fff;
`;

const InputWrapper = styled.View`
	height: 40%;
	width: 100%;
	margin-top: 12px;
`;

const ChoicesWrapper = styled.View`
	width: 100%;
	flex: 1;
	background-color: #e8e8e8;
	justify-content: center;
	align-items: center;
`;

const NoChoice = styled.Text`
	font-size: 11px;
	color: #818181;
`;

const JanusConversation = ({ navigation }) => {
	navigation.setOptions({
		headerTitle: 'Janus',
		headerLeft: () => (
			<HeaderBackButton onPress={() => navigation.navigate('SmsScreen')} />
		),
	});

	const choices = ['Salut', 'Bonsoir', 'Ho biloute'];
	const smsList = [
		{
			isUser: false,
			message: 'Bonjour toi',
		},
	];

	const [choicesAvailable, setChoicesAvailable] = useState(true);
	const [activeChoice, setActiveChoice] = useState(undefined);
	const [smsMessages, setSmsMessages] = useState(smsList);
	const smsListRef = useRef(null);

	const onPressChoice = (choiceIndex) => setActiveChoice(choiceIndex);
	const onPressSend = (message) => {
		setSmsMessages((prevMessages) => [
			...prevMessages,
			{ isUser: true, message },
		]);

		setChoicesAvailable(false);
	};

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<SmsList
						ref={smsListRef}
						onContentSizeChange={() =>
							smsListRef.current?.scrollToEnd({ animated: true })
						}>
						{smsMessages.map((sms, i) => (
							<SmsMessage
								key={i}
								hasPlaceholder={!sms.isUser}
								isUser={sms.isUser}
								message={sms.message}
							/>
						))}
						{/* <SmsMessage hasPlaceholder message="Bonjour toi !" />

						<SmsMessage
							isUser
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>

						<SmsMessage message="Lorem ipsum dolor sit amet" />
						<SmsMessage
							hasPlaceholder
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/> */}
					</SmsList>
					<InputWrapper>
						<SmsInput
							text={choices[activeChoice]}
							onPressSend={choicesAvailable ? onPressSend : undefined}
						/>
						<ChoicesWrapper>
							{!choicesAvailable ? (
								<NoChoice>Pas de réponses disponibles pour le moment.</NoChoice>
							) : (
								choices.map((c, i) => (
									<AnswerChoice
										key={i}
										index={i}
										active={i === activeChoice}
										text={c}
										onPressChoice={onPressChoice}
									/>
								))
							)}
						</ChoicesWrapper>
					</InputWrapper>
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
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 40,
	},
	sendIcon: {
		position: 'absolute',
		right: 12,
		top: 12,
	},
});

export default JanusConversation;
