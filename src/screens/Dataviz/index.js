import React, { useState } from 'react';
import styled, { css, withTheme } from 'styled-components';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import Dataviz from './components/Dataviz';
import TabBar from './components/TabBar';
import ArrowButton from './components/ArrowButton';

import { SIZES, STRINGS } from 'configs';

const DatavizScreen = ({ route, navigation, theme }) => {
	const { W, H, H_SHRINK } = SIZES.DATAVIZ;
	const { UP, DOWN } = STRINGS.ARROW;

	const [datavizShrunk, setDataVizShrunk] = useState(false);

	const onPressButton = () => setDataVizShrunk(!datavizShrunk);

	return (
		<LayoutWrapper screenName={route.name}>
			<Dataviz width={W} height={datavizShrunk ? H_SHRINK : H} />
			<TabBar />
			<ArrowButton
				pressHandler={onPressButton}
				iconType={datavizShrunk ? UP : DOWN}
			/>
		</LayoutWrapper>
	);
};

export default withTheme(DatavizScreen);
