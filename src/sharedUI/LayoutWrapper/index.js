import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationBar from 'sharedUI/NavigationBar';
import StatusBar from 'sharedUI/StatusBar';

import getLayoutConfigs from './configs';

const LayoutWrapper = ({ children, screenName }) => {
	const {
		navigationBar,
		navigationBarConfigs,
		statusBar,
		statusBarConfigs,
	} = getLayoutConfigs(screenName);

	return (
		<SafeAreaView>
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

export default LayoutWrapper;
