import { find, last } from 'utils';

import { storyScripts } from 'states/data';
import { STORY_TYPES } from './configs';

const doProceedToNextScript = ({ choices }) => !choices || choices.length === 0;

const findScript = (id) => find(storyScripts, 'ID', id);

const isInputAction = ({ action }) => action === STORY_TYPES.INPUT;

const containsPlaceholder = ({ type }) =>
	type === STORY_TYPES.MESSAGE_WITH_PLACEHOLDER;

const isSafeToAddScript = ({ text, type }, dialogueLog) =>
	text !== last(dialogueLog).text && type !== STORY_TYPES.INPUT;

const replaceWithUsername = (string, username, isUser = false) =>
	string.replace(
		isUser ? new RegExp('...' + '$') : '[$]',
		`${isUser ? ' ' : ''}${username.toUpperCase()}`
	);

export {
	containsPlaceholder,
	doProceedToNextScript,
	findScript,
	isInputAction,
	isSafeToAddScript,
	replaceWithUsername,
};
