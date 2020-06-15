import React, { useRef, useEffect, useCallback } from 'react';
import { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import SmsMessage from './components/SmsMessage';
import JanusAnswerBlock from './components/JanusAnswerBlock';

import DialogueMessage from 'data/classes/DialogueMessage';

import { updateJanusLastMessage } from 'states/actions/mergedDataActions';
import {
	activateSmallGlitch,
	activateBigGlitch,
} from 'states/actions/gameActions';
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
	isBreakpoint,
	isBugging,
	isEnding,
	isNeedToTrigger,
	isSafeToTrigger,
	isSafeToAddScript,
	replaceWithUsername,
} from 'hooks/DialogueManager/utils';
import { sleep } from 'utils';
import { NUMBERS, SCREENS } from 'configs';

const JanusConversationScreen = ({ route, navigation, theme }) => {
	const smsListRef = useRef(null);

	const dispatch = useDispatch();
	const { dialogueLog, currentScriptID, username, userAction } = useSelector(
		(state) => state.story
	);
	const { game } = useSelector((state) => state);

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

			console.log(activeScript);

			if (isBreakpoint(activeScript)) {
				await sleep(activeScript.delayTime);
			}

			if (containsPlaceholder(activeScript)) {
				activeScript.changeText(replaceWithUsername(activeScript.text, username));
			}

			const { text, type, choices } = activeScript;

			isBugging(activeScript) && activateSmallGlitch(dispatch);

			// To prevent a same or previous script, or a script that
			// shoudn't be rendered is added to the dialogue log
			isSafeToAddScript(activeScript, dialogueLog) &&
				updateDialogueLog(
					dispatch,
					new DialogueMessage({
						text,
					})
				) &&
				// Also update Janus last message back in the SMS List screen
				updateJanusLastMessage(dispatch, text);

			updateUserAction(dispatch, {
				type,
				choices,
			});

			await sleep(NUMBERS.JANUS_SMS_DELAY);

			// Check to proceed to the next script
			// Do not proceed to next script if reach the ending
			if (!isEnding(activeScript)) {
				// Check if the next script needs to be triggered or not
				if (isNeedToTrigger(activeScript)) {
					isSafeToTrigger(activeScript, game) &&
						doProceedToNextScript(activeScript) &&
						updateCurrentScriptID(dispatch, activeScript.nextID);
				} else {
					// Check if the current script has user action or not
					doProceedToNextScript(activeScript) &&
						updateCurrentScriptID(dispatch, activeScript.nextID);
				}
			} else {
				// await sleep(NUMBERS.JANUS_APPEARS_DELAY_SECS);

				activateBigGlitch(dispatch);

				await sleep(NUMBERS.GLITCH_XL * NUMBERS.GLITCH_INTERVAL);

				navigation.navigate(SCREENS.JANUS);
			}
		};

		update();
	}, [currentScriptID, dialogueLog, username]);

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
						data={sms.text}
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
