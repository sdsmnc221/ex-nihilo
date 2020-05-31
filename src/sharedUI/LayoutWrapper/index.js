import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationBar from 'sharedUI/NavigationBar';
import StatusBar from 'sharedUI/StatusBar';

import getLayoutConfigs from './configs';

const LayoutWrapper = ({ theme, children, screenName }) => {
	const {
		navigationBar,
		navigationBarConfigs,
		statusBar,
		statusBarConfigs,
		gapForStatusBar,
	} = getLayoutConfigs(screenName);

	return (
		<SafeAreaView
			css={`
				${theme.styles.safeAreaView(gapForStatusBar)}
			`}>
			{children}
			{statusBar && <StatusBar {...statusBarConfigs} />}
			{navigationBar && <NavigationBar {...navigationBarConfigs} />}
		</SafeAreaView>
	);
};

LayoutWrapper.propTypes = {
	children: PropTypes.object.isRequired,
	screenName: PropTypes.string,
};

LayoutWrapper.PropTypes = {
	screenName: null,
};

export default withTheme(LayoutWrapper);
