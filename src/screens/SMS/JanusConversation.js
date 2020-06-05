import React, { useRef, useState, useEffect, useCallback } from 'react';
import { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import SmsMessage from './components/SmsMessage';
import JanusAnswerBlock from './components/JanusAnswerBlock';

import DialogueMessage from 'data/classes/DialogueMessage';

import {
	updateUserAction,
	updateActiveChoiceIndex,
	updateDialogueLog,
	updateCurrentScriptID,
} from 'states/actions/storyActions';
import {
	containsPlaceholder,
	doProceedToNextScript,
	findScript,
	isSafeToAddScript,
	replaceWithUsername,
} from 'hooks/DialogueManager/utils';
import { sleep } from 'utils';
import { NUMBERS } from 'configs';

const JanusConversationScreen = ({ route, theme }) => {
	const smsListRef = useRef(null);

	const dispatch = useDispatch();
	const {
		scripts,
		dialogueLog,
		currentScriptID,
		username,
		userAction,
	} = useSelector((state) => state.story);

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

			if (containsPlaceholder(activeScript)) {
				activeScript.changeText(replaceWithUsername(activeScript.text, username));
			}

			const { text, type, choices } = activeScript;

			// To prevent a same or previous script, or a script that
			// shoudn't be rendered is added to the dialogue log
			isSafeToAddScript(activeScript, dialogueLog) &&
				updateDialogueLog(
					dispatch,
					new DialogueMessage({
						text,
					})
				);

			updateUserAction(dispatch, {
				type,
				choices,
			});

			await sleep(NUMBERS.JANUS_SMS_DELAY);

			// Check if the current script has user action or not
			// If it won't, proceed to the next script
			doProceedToNextScript(activeScript) &&
				updateCurrentScriptID(dispatch, activeScript.nextID);
		};

		update();
	}, [currentScriptID, dialogueLog, username, findActiveScript, dispatch]);

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

			<FillGap />
		</LayoutWrapper>
	);
};

export default withTheme(JanusConversationScreen);
