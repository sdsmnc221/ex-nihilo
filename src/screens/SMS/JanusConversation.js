import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import SmsMessage from './components/SmsMessage';
import JanusAnswerBlock from './components/JanusAnswerBlock';

import DialogueMessage from 'data/classes/DialogueMessage';

import { find } from 'utils';

const InputOverlay = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	justify-content: center;
	align-items: center;
`;

const Input = styled.TextInput`
	width: 64%;
	height: 60px;
	padding: 14px 26px;
	border-radius: 50px;
	background-color: ${({ theme }) => theme.colors.ghostWhite};
	color: ${({ theme }) => theme.colors.dimGray};
	${({ theme }) => theme.styles.os.body};
`;

const JanusConversationScreen = ({ route, navigation, theme }) => {
	const smsListRef = useRef(null);

	const [openInput, setOpenInput] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const onInputValue = (text) => setInputValue(text);
	const onSubmitValue = () => setOpenInput(false);

	const { scripts, dialogueLog, currentScriptID } = useSelector(
		(state) => state.story
	);

	const [activeScript, setActiveScript] = useState(
		find(scripts, 'ID', dialogueLog.currentScriptID)
	);
	const [dialogueMessages, setDialogueMessages] = useState([]);
	const [choices, setChoices] = useState(activeScript.choices);
	const [activeChoiceIndex, setActiveChoiceIndex] = useState(undefined);

	const updateDialogueMessages = useCallback(
		(message) =>
			setDialogueMessages((prevMessages) => [
				...prevMessages,
				new DialogueMessage(message),
			]),
		[]
	);
	const onPressChoice = (index) => setActiveChoiceIndex(index);
	const onPressSend = (choice) => {
		updateDialogueMessages(choice);
		setActiveScript(find(scripts, 'ID', choice.nextID));
	};

	useEffect(() => {
		console.log(scripts, dialogueLog, currentScriptID);
	}, [scripts, dialogueLog, currentScriptID]);

	// useEffect(() => {
	// 	console.log(activeScript, choices);
	// 	setTimeout(() => {
	// 		updateDialogueMessages(activeScript);
	// 	}, 240);

	// 	switch (activeScript.type) {
	// 		case 'MESSAGE':
	// 		case 'MESSAGE_WITH_PLACEHOLDER':
	// 			setActiveScript(find(scripts, 'ID', activeScript.nextID));
	// 			break;
	// 		case 'MESSAGE_WITH_CHOICES':
	// 			setChoices(activeScript.choices);
	// 			setActiveChoiceIndex(undefined);
	// 			break;
	// 		case 'INPUT':
	// 			setOpenInput(true);
	// 			setActiveScript(find(scripts, 'ID', activeScript.nextID));
	// 			setActiveChoiceIndex(undefined);
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }, [activeScript]);

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				ref={smsListRef}
				css={`
					${theme.styles.list}
					padding-top: 24px;
				`}
				data={dialogueMessages}
				keyExtractor={(item, index) => index.toString()}
				onScrollToIndexFailed={() => {}}
				onContentSizeChange={() =>
					smsListRef.current && smsListRef.current.scrollToEnd()
				}
				renderItem={({ item: sms }) => (
					<SmsMessage
						withAvatar={!sms.isUser}
						isUser={sms.isUser}
						message={sms.text}
						withSpacing
					/>
				)}
				ListFooterComponent={<FillGap height={36} />}
			/>

			<JanusAnswerBlock
				choices={choices}
				activeChoiceIndex={activeChoiceIndex}
				activeScript={activeScript}
				onPressSend={onPressSend}
				onPressChoice={onPressChoice}
			/>

			{openInput && (
				<InputOverlay>
					<Input
						theme={theme}
						blurOnSubmit
						onChangeText={onInputValue}
						onSubmitEditing={onSubmitValue}
						value={inputValue}
						style={theme.shadows.default}
					/>
				</InputOverlay>
			)}

			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(JanusConversationScreen);
