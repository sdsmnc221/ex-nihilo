import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

import WebScreen from 'sharedUI/WebScreen';

import { URL_DATAVIZ } from 'configs';

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
