import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import Dataviz from './components/Dataviz';

import { SIZES } from 'configs';

const DatavizScreen = ({ route, navigation, theme }) => {
	const { W, H } = SIZES.DATAVIZ;

	return (
		<LayoutWrapper screenName={route.name}>
			<Dataviz width={W} height={H} />
		</LayoutWrapper>
	);
};

export default withTheme(DatavizScreen);
