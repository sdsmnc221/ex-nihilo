import { find, last } from 'utils';

import { storyScripts } from 'states/data';
import { STORY_TYPES } from './configs';

const {
	BREAKPOINT,
	BREAKPOINT_TRIGGER,
	END,
	INPUT,
	MESSAGE_WITH_PLACEHOLDER,
} = STORY_TYPES;

const containsPlaceholder = ({ type }) => type === MESSAGE_WITH_PLACEHOLDER;

const convertDelayTime = (minute) => 1000 * 60 * minute;

const doProceedToNextScript = ({ choices, nextID }) =>
	!choices || choices.length === 0 || nextID;

const findScript = (id) => find(storyScripts, 'ID', id);

const isBreakpoint = ({ type }) => type === BREAKPOINT;

const isEnding = ({ type }) => type === END;

const isInputAction = ({ action }) => action === INPUT;

const isNeedToTrigger = ({ type }) => type === BREAKPOINT_TRIGGER;

const isSafeToAddScript = ({ text, type }, dialogueLog) =>
	text !== last(dialogueLog).text &&
	(type !== INPUT && type !== BREAKPOINT && type !== BREAKPOINT_TRIGGER);

const isSafeToTrigger = ({ condition }, gameObject) => !!gameObject[condition];

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
	isEnding,
	isInputAction,
	isNeedToTrigger,
	isSafeToAddScript,
	isSafeToTrigger,
	replaceWithUsername,
};
