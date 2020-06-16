import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeArea } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationBar from 'sharedUI/NavigationBar';
import StatusBar from 'sharedUI/StatusBar';
import Header from 'sharedUI/Header';
import Glitch from 'sharedUI/Glitch';
import FillGap from 'sharedUI/FillGap';

import FullScreen from 'utils/FullScreen';

import getLayoutConfigs from './configs';
import getHeaderConfigs from 'sharedUI/Header/configs';
import { NUMBERS } from 'configs';

import { resetGlitch } from 'states/actions/gameActions';

const LayoutWrapper = ({ theme, children, screenName, headerTitle }) => {
	const insets = useSafeArea();

	const {
		navigationBar,
		navigationBarConfigs,
		statusBar,
		statusBarConfigs,
		gapForStatusBar,
		bodyColor,
		bodyAdditionalStyle,
		hasFillGap,
	} = getLayoutConfigs(screenName);

	const { header, headerConfigs } = getHeaderConfigs(screenName);

	if (headerTitle) {
		headerConfigs.title = headerTitle;
	}

	const dispatch = useDispatch();
	const { glitchEnabled, glitchAmount } = useSelector((state) => state.game);

	const [glitchOn, setGlitchOn] = useState(false);
	const [glitchCount, setGlitchCount] = useState(0);

	const letsGlitch = useCallback(() => {
		setGlitchOn(true);
		setGlitchCount(glitchCount + 1);
	}, [glitchCount]);

	const letsBug = useCallback(
		(count) => {
			let timeout = setTimeout(letsGlitch, NUMBERS.GLITCH_INTERVAL);
			if (glitchCount >= count) {
				clearTimeout(timeout);
				setGlitchOn(false);
			}
		},
		[glitchCount]
	);

	useEffect(() => {
		if (glitchEnabled) {
			letsBug(glitchAmount);
			setTimeout(
				() => resetGlitch(dispatch),
				NUMBERS.GLITCH_INTERVAL * glitchAmount
			);
		}
	}, [glitchCount, glitchEnabled]);

	useFocusEffect(
		() =>
			// Enable Fullscreen mode
			FullScreen.enable(),
		[]
	);

	return (
		<SafeAreaView
			css={`
				${theme.styles.safeAreaView(gapForStatusBar, bodyColor)}
			`}>
			<View
				css={`
					${theme.styles.body(bodyColor)}
					${bodyAdditionalStyle}
				`}>
				{header && <Header {...headerConfigs} />}
				{children}
				{!insets.bottom && hasFillGap && <FillGap />}
			</View>
			{navigationBar && <NavigationBar {...navigationBarConfigs} />}
			{statusBar && <StatusBar {...statusBarConfigs} />}
			{glitchEnabled && glitchOn && <Glitch glitchon={glitchOn} />}
		</SafeAreaView>
	);
};

LayoutWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	screenName: PropTypes.string,
	headerTitle: PropTypes.string,
};

LayoutWrapper.defaultProps = {
	screenName: null,
	headerTitle: null,
};

export default withTheme(LayoutWrapper);
