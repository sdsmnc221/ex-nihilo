import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import WebScreen from 'sharedUI/WebScreen';

import { URL_DATAVIZ } from 'configs';
import { resetTabIndex } from '../../../states/actions/datavizAction';

const Dataviz = ({ ...webScreenprops }) => {
	const runScript = `
		window.isNativeApp = true;
		setTimeout(function() { window.alert(window.isNativeApp ? 'hi' :'bye') }, 2000);
		true; // note: this is required, or you'll sometimes get silent failures
	`;

	const run = (webView) => {
		console.log(webView);
		webView && webView.injectJavaScript(runScript);
	};

	const dispatch = useDispatch();

	useFocusEffect(() => {
		return () => {
			resetTabIndex(dispatch);
		};
	}, []);

	return (
		<WebScreen
			url={URL_DATAVIZ}
			// injectedJavaScript={runScript}
			injectJS={run}
			{...webScreenprops}
		/>
	);
};

Dataviz.propTypes = {};

Dataviz.defaultProps = {};

export default withTheme(Dataviz);
