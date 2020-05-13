import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NeuView, NeuBorderView } from 'react-native-neu-element';
import styled from 'styled-components';

import { colors, shadows } from 'configs/theme';

const Wrapper = styled.TouchableOpacity`
	margin-top: 6%;
	margin-bottom: 12%;
	position: relative;
`;

const SwiperInner = styled.View`
	width: 98%;
	height: 100%;
	background-color: ${colors.slateBlue};
	border-radius: 50px;
`;

const SwiperOuter = styled.View`
	position: absolute;
	top: 2px;
	left: 4px;
`;

const Swiper = ({ onPress }) => (
	<Wrapper activeOpacity={0.8} onPress={onPress}>
		<NeuBorderView
			width={72}
			height={32}
			color={colors.ghostWhite}
			borderWidth={24}
			borderRadius={32}
			style={shadows.default}
			noShadow>
			<SwiperInner />
		</NeuBorderView>
		<SwiperOuter>
			<NeuView
				color={colors.ghostWhite}
				height={26}
				width={26}
				borderRadius={26}
				convex
				style={shadows.default}
			/>
		</SwiperOuter>
	</Wrapper>
);

Swiper.propTypes = {
	onPress: PropTypes.func,
};

Swiper.defaultProps = {
	onPress: () => {},
};

export default Swiper;
