import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Data from 'data';

import { updateSmsWithJanus } from 'states/actions/mergedDataActions';
import {
	showNotification,
	updateNotificationMessage,
	updateCurrentScriptID,
} from 'states/actions/storyActions';

import { NUMBERS } from 'configs';
import { tick } from 'utils';
import {
	doTriggerNotification,
	findScript,
	convertDelayTime,
} from 'hooks/DialogueManager/utils';
import { JANUS_SMS } from './DialogueManager/configs';

const useGlobalGame = () => {
	const dispatch = useDispatch();

	const { UNLOCK_APP, UNLOCK_ALBUM, UNLOCK_EMAIL } = useSelector(
		(state) => state.game
	);

	useEffect(() => {
		if (UNLOCK_APP) {
			const JanusSms = Data('SMS', JANUS_SMS);
			const actions = () => {
				updateSmsWithJanus(dispatch, JanusSms);
				showNotification(dispatch);
			};

			tick(() => actions(), convertDelayTime(NUMBERS.JANUS_APPEARS_DELAY_MINUTES));
		}
	}, [UNLOCK_APP]);

	const { dialogueLog, currentScriptID } = useSelector((state) => state.story);

	const findActiveScript = useCallback(() => findScript(currentScriptID), [
		currentScriptID,
	]);

	useEffect(() => {
		const activeScript = findActiveScript();

		// Trigger Notification
		doTriggerNotification(activeScript) &&
			updateNotificationMessage(dispatch, activeScript.text) &&
			showNotification(dispatch);
	}, [currentScriptID]);

	useEffect(() => {
		if (UNLOCK_ALBUM || UNLOCK_EMAIL) {
			const activeScript = findActiveScript();
			updateCurrentScriptID(dispatch, activeScript.nextID);
		}
	}, [UNLOCK_ALBUM, UNLOCK_EMAIL]);

	return;
};

export default useGlobalGame;
