import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import SmsMessage from './components/SmsMessage';
import JanusAnswerBlock from './components/JanusAnswerBlock';

import DialogueMessage from 'data/classes/DialogueMessage';

import { findScript } from 'hooks/DialogueManager/utils';
import {
	updateUserAction,
	updateActiveChoiceIndex,
	updateDialogueLog,
	updateCurrentScriptID,
} from '../../states/actions/storyActions';
import {
	isSafeToAddScript,
	doProceedToNextScript,
} from '../../hooks/DialogueManager/utils';
import { tick, sleep } from '../../utils';
import { NUMBERS } from '../../configs';

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

	const dispatch = useDispatch();
	const { scripts, dialogueLog, currentScriptID, userAction } = useSelector(
		(state) => state.story
	);

	const findActiveScript = useCallback(() => findScript(currentScriptID), [
		currentScriptID,
	]);

	const onPressChoice = (activeChoiceIndex) =>
		updateActiveChoiceIndex(dispatch, { activeChoiceIndex });

	const onPressSend = async (choice) => {
		const { text, isUser, nextID } = choice;

		updateActiveChoiceIndex(dispatch, { activeChoiceIndex: null });
		updateDialogueLog(dispatch, new DialogueMessage({ text, isUser }));

		updateCurrentScriptID(dispatch, nextID);
	};

	useEffect(() => {
		const update = async () => {
			const activeScript = findActiveScript();

			await sleep(NUMBERS.JANUS_SMS_DELAY);

			// To prevent a same or previous script is added to the dialogue log
			// e.g. when exit screen then return.
			isSafeToAddScript(activeScript, dialogueLog) &&
				updateDialogueLog(
					dispatch,
					new DialogueMessage({ text: activeScript.text })
				);

			updateUserAction(dispatch, {
				type: activeScript.type,
				choices: activeScript.choices,
			});

			await sleep(NUMBERS.JANUS_SMS_DELAY);

			// Check if the current script has user action or not
			// If it won't, proceed to the next script
			doProceedToNextScript(activeScript) &&
				updateCurrentScriptID(dispatch, activeScript.nextID);
		};

		update();
	}, [currentScriptID, dialogueLog, findActiveScript, dispatch]);

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				ref={smsListRef}
				css={`
					${theme.styles.list}
					padding-top: 24px;
				`}
				data={dialogueLog}
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
				userAction={userAction}
				onPressChoice={onPressChoice}
				onPressSend={onPressSend}
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
