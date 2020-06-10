import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import Dataviz from './components/Dataviz';
import TabBar from './components/TabBar';
import ArrowButton from './components/ArrowButton';
import InfoText from './components/InfoText';

import { resetTabIndex } from 'states/actions/datavizAction';

import { SIZES, STRINGS } from 'configs';

const DatavizScreen = ({ route }) => {
	const { W, H, H_SHRINK } = SIZES.DATAVIZ;
	const { UP, DOWN } = STRINGS.ARROW;

	const [datavizShrunk, setDataVizShrunk] = useState(false);

	const onPressButton = () => setDataVizShrunk(!datavizShrunk);

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			resetTabIndex(dispatch);
		};
	}, []);

	return (
		<LayoutWrapper screenName={route.name}>
			<Dataviz width={W} height={datavizShrunk ? H_SHRINK : H} />
			<TabBar />
			<ArrowButton
				pressHandler={onPressButton}
				iconType={datavizShrunk ? UP : DOWN}
			/>
			{datavizShrunk && <InfoText />}
		</LayoutWrapper>
	);
};

export default DatavizScreen;
