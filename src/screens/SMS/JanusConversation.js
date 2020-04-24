import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import NavigationBar from 'sharedUI/NavigationBar';
import SmsMessage from './components/SmsMessage';
import AnswerChoice from './components/AnswerChoice';
import SmsInput from './components/SmsInput';

import DialogueMessage from 'data/classes/DialogueMessage';

import { find } from 'utils';

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

	const smsListRef = useRef(null);

	const { scripts, dialogueLog } = useSelector((state) => state.story);

	const [activeScript, setActiveScript] = useState(
		find(scripts, 'ID', dialogueLog.currentScriptID)
	);
	const [dialogueMessages, setDialogueMessages] = useState([
		new DialogueMessage(activeScript),
	]);
	const [choices, setChoices] = useState(activeScript.choices);
	const [activeChoiceIndex, setActiveChoiceIndex] = useState(undefined);

	const onPressChoice = (index) => setActiveChoiceIndex(index);
	const onPressSend = (choice) => {
		setDialogueMessages((prevMessages) => [
			...prevMessages,
			new DialogueMessage(choice),
		]);

		setChoices(false);
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
						{dialogueMessages.map((message, i) => (
							<SmsMessage
								key={i}
								hasPlaceholder={!message.isUser}
								isUser={message.isUser}
								message={message.text}
							/>
						))}
					</SmsList>
					<InputWrapper>
						<SmsInput
							choice={choices[activeChoiceIndex]}
							onPressSend={choices ? onPressSend : undefined}
						/>
						<ChoicesWrapper>
							{!choices ? (
								<NoChoice>Pas de réponses disponibles pour le moment.</NoChoice>
							) : (
								choices.map((c, i) => (
									<AnswerChoice
										key={i}
										index={i}
										active={i === activeChoiceIndex}
										text={c.text}
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
