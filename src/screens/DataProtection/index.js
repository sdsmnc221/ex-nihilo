import React from 'react';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import WebScreen from 'sharedUI/WebScreen';

import { URL_INFO_DATA } from 'configs';

const DataProtectionScreen = ({ route }) => (
	<LayoutWrapper screenName={route.name}>
		<WebScreen url={URL_INFO_DATA} />
	</LayoutWrapper>
);

export default DataProtectionScreen;
