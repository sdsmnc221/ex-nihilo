import { find, last } from 'utils';

import { storyScripts } from 'states/initialStates';

const findScript = (id) => find(storyScripts, 'ID', id);

const isSafeToAddScript = ({ text }, dialogueLog) =>
	text !== last(dialogueLog).text;

const doProceedToNextScript = ({ choices }) => !choices || choices.length === 0;

export { doProceedToNextScript, isSafeToAddScript, findScript };
