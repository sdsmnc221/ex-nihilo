import { find, last } from 'utils';

import { storyScripts } from 'states/data';
import { STORY_TYPES } from './configs';

const { BREAKPOINT, INPUT, MESSAGE_WITH_PLACEHOLDER } = STORY_TYPES;

const doProceedToNextScript = ({ choices }) => !choices || choices.length === 0;

const findScript = (id) => find(storyScripts, 'ID', id);

const isBreakpoint = ({ type }) => type === BREAKPOINT;

const isInputAction = ({ action }) => action === INPUT;

const containsPlaceholder = ({ type }) => type === MESSAGE_WITH_PLACEHOLDER;

const convertDelayTime = (minute) => 1000 * 60 * minute;

const isSafeToAddScript = ({ text, type }, dialogueLog) =>
	text !== last(dialogueLog).text && (type !== INPUT && type !== BREAKPOINT);

const replaceWithUsername = (string, username, isUser = false) =>
	string.replace(
		isUser ? new RegExp('...' + '$') : '[$]',
		`${isUser ? ' ' : ''}${username.toUpperCase()}`
	);

export {
	containsPlaceholder,
	convertDelayTime,
	doProceedToNextScript,
	findScript,
	isBreakpoint,
	isInputAction,
	isSafeToAddScript,
	replaceWithUsername,
};
