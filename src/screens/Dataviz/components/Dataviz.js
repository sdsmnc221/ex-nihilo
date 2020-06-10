import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { useSelector } from 'react-redux';

import WebScreen from 'sharedUI/WebScreen';

import { STRINGS, URL_DATAVIZ } from 'configs';

const { DATAVIZ_TAB_BAR, DATAVIZ_EVENT_TYPES } = STRINGS;

const Dataviz = ({ ...webScreenprops }) => {
	const { tabIndex } = useSelector((state) => state.dataviz);
	const { sms, gallery, contacts, calls } = useSelector(
		(state) => state.deviceData
	);

	const deviceInfo = [
		(sms && sms.count) || 0,
		(gallery && gallery.count) || 0,
		(contacts && contacts.length) || 0,
		(calls && calls.length) || 0,
	];

	const REACT_NATIVE_INFO = {
		count: deviceInfo.reduce((a, b) => a + b, 0),
		data: DATAVIZ_TAB_BAR.map((category, i) => ({
			label: category.label.toLowerCase(),
			count: deviceInfo[i],
		})),
	};

	const activeType =
		tabIndex === null ? null : REACT_NATIVE_INFO.data[tabIndex].label;

	// window.REACT_NATIVE_INFO = {
	//   count: 480,
	//   activeType: null,
	//   data: [
	//     { label: "sms", count: 120 },
	//     { label: "photos", count: 120 },
	//     { label: "contacts", count: 120 },
	//     { label: "appels", count: 120 }
	//   ]
	// };

	const runScript = `
		window.REACT_NATIVE_INFO = {
			count: ${REACT_NATIVE_INFO.count},
			activeType: ${activeType ? `'${activeType}'` : null},
			data: [
				{ label: 'sms', count: ${REACT_NATIVE_INFO.data[0].count} },
				{ label: 'photos', count: ${REACT_NATIVE_INFO.data[1].count} },
				{ label: 'contacts', count: ${REACT_NATIVE_INFO.data[2].count} },
				{ label: 'appels', count: ${REACT_NATIVE_INFO.data[3].count} },
			],
		};

		window.dispatchEvent(new Event('${DATAVIZ_EVENT_TYPES.REACT_NATIVE_INFO}'));

		window.dispatchEvent(new Event('${DATAVIZ_EVENT_TYPES.SET_ACTIVE_TYPE}'));
		
		true; // note: this is required, or you'll sometimes get silent failures
	`;

	const run = (webView) => {
		webView && webView.injectJavaScript(runScript);
	};

	return (
		<WebScreen
			url={URL_DATAVIZ}
			injectedJavaScript={runScript}
			injectJS={run}
			{...webScreenprops}
		/>
	);
};

Dataviz.propTypes = {};

Dataviz.defaultProps = {};

export default withTheme(Dataviz);
