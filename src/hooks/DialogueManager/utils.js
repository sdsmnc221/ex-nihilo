import { find, last } from 'utils';

import storyScripts from 'data/defaultData/storyScripts';
import { STORY_TYPES } from './configs';

const {
	BREAKPOINT,
	BREAKPOINT_TRIGGER,
	BUG,
	END,
	INPUT,
	MESSAGE_AFTER_BREAKPOINT,
	MESSAGE_AFTER_BREAKPOINT_NO_CHOICE,
	MESSAGE_WITH_PLACEHOLDER,
} = STORY_TYPES;

const containsPlaceholder = ({ type }) => type === MESSAGE_WITH_PLACEHOLDER;

const doProceedToNextScript = ({ choices, nextID }) =>
	!choices || choices.length === 0 || nextID;

const findScript = (id) => find(storyScripts, 'ID', id);

const doTriggerNotification = ({ type }) =>
	[MESSAGE_AFTER_BREAKPOINT, MESSAGE_AFTER_BREAKPOINT_NO_CHOICE].includes(type);

const isBreakpoint = ({ type }) => type === BREAKPOINT;

const isBugging = ({ type }) => (type = BUG);

const isEnding = ({ type }) => type === END;

const isInputAction = ({ action }) => action === INPUT;

const isNeedToTrigger = ({ type }) => type === BREAKPOINT_TRIGGER;

const isSafeToAddScript = ({ text, type }, dialogueLog) =>
	text &&
	text !== last(dialogueLog).text &&
	(type !== INPUT && type !== BREAKPOINT && type !== BREAKPOINT_TRIGGER);

const isSafeToTrigger = ({ condition }, gameObject) => !!gameObject[condition];

const replaceWithUsername = (string, username, isUser = false) => {
	const USERNAME = ` ${username.toUpperCase()} `;
	if (isUser) {
		return string.slice(0, string.lastIndexOf('...')) + USERNAME;
	} else {
		return string.replace('[$]', USERNAME);
	}
};

export {
	containsPlaceholder,
	doProceedToNextScript,
	doTriggerNotification,
	findScript,
	isBreakpoint,
	isBugging,
	isEnding,
	isInputAction,
	isNeedToTrigger,
	isSafeToAddScript,
	isSafeToTrigger,
	replaceWithUsername,
};
