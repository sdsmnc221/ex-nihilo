import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, css } from 'styled-components';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationBar from 'sharedUI/NavigationBar';
import StatusBar from 'sharedUI/StatusBar';
import Header from 'sharedUI/Header';
import Notification from 'sharedUI/Notification';

import getLayoutConfigs from './configs';
import getHeaderConfigs from 'sharedUI/Header/configs';

const LayoutWrapper = ({ theme, children, screenName, headerTitle }) => {
	const {
		navigationBar,
		navigationBarConfigs,
		statusBar,
		statusBarConfigs,
		gapForStatusBar,
		bodyColor,
		bodyAdditionalStyle,
	} = getLayoutConfigs(screenName);

	const { header, headerConfigs } = getHeaderConfigs(screenName);

	if (headerTitle) {
		headerConfigs.title = headerTitle;
	}

	return (
		<SafeAreaView
			css={`
				${theme.styles.safeAreaView(gapForStatusBar)}
			`}>
			<View
				css={`
					${css`
						${theme.styles.body(bodyColor)}
						${bodyAdditionalStyle}
					`}
				`}>
				{header && <Header {...headerConfigs} />}
				{children}
			</View>
			{statusBar && <StatusBar {...statusBarConfigs} />}
			{navigationBar && <NavigationBar {...navigationBarConfigs} />}
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
