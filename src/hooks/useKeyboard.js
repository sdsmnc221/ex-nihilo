/**
 * Adapt from
 * https://github.com/react-native-community/hooks/blob/master/src/useKeyboard.ts
 */

import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = (onWillShow, onDidShow, onWillHide, onDidHide) => {
	const [shown, setShown] = useState(false);

	const handleKeyboardWillShow = (e) => onWillShow && onWillShow();

	const handleKeyboardDidShow = (e) => {
		setShown(true);
		onDidShow && onDidShow();
	};
	const handleKeyboardWillHide = (e) => onWillHide && onWillHide();
	const handleKeyboardDidHide = (e) => {
		setShown(false);
		onDidHide && onDidHide();
	};

	useEffect(() => {
		Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow);
		Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
		Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide);
		Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

		return () => {
			Keyboard.removeListener('keyboardWillShow', handleKeyboardWillShow);
			Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
			Keyboard.removeListener('keyboardWillHide', handleKeyboardWillHide);
			Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
		};
	}, []);

	return {
		keyboardShown: shown,
	};
};

export default useKeyboard;
