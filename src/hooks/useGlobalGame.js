import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Data from 'data';

import { updateSmsWithJanus } from 'states/actions/mergedDataActions';
import {
	showNotification,
	updateNotificationMessage,
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

	const { UNLOCK_APP } = useSelector((state) => state.game);

	useEffect(() => {
		if (UNLOCK_APP) {
			const JanusSms = Data('SMS', JANUS_SMS);
			const actions = () => {
				updateSmsWithJanus(dispatch, JanusSms);
				showNotification(dispatch);
			};
			actions();
			// tick(() => actions(), convertDelayTime(NUMBERS.JANUS_APPEARS_DELAY_MINUTES));
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

	return;
};

export default useGlobalGame;
