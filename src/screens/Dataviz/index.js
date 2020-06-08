import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import Canvas from 'react-native-canvas';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

import { SIZES } from 'configs';

const Wrapper = styled.View`
	width: 100%;
	min-height: 100%;
	background-color: ${({ theme }) => theme.colors.black};
`;

const DatavizScreen = ({ route, navigation, theme }) => {
	const handleCanvas = (canvas) => {
		if (canvas) {
			const { W, H } = SIZES.CANVAS;

			canvas.width = W;
			canvas.height = H;
			const ctx = canvas.getContext('2d');

			ctx.fillStyle = theme.colors.slateBlue;
			ctx.fillRect(0, 0, W, H);
		}
	};

	return (
		<LayoutWrapper screenName={route.name}>
			<Wrapper>
				<Canvas ref={handleCanvas} />
			</Wrapper>
		</LayoutWrapper>
	);
};

export default withTheme(DatavizScreen);
