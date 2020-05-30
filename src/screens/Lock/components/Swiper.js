import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NeuView, NeuBorderView } from 'utils/react-native-neu-element';

const Wrapper = styled.TouchableOpacity`
	margin-top: 14%;
	margin-bottom: 16%;
	position: relative;
`;

const SwiperInner = styled.View`
	width: 98%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.slateBlue};
	border-radius: 50px;
`;

const SwiperOuter = styled.View`
	position: absolute;
	top: 2px;
	left: 4px;
`;

const Swiper = ({ onPress, theme }) => {
	const { ghostWhite } = theme.colors;
	const { default: defaultShadow } = theme.shadows;

	return (
		<Wrapper activeOpacity={0.9} onPress={onPress}>
			<NeuBorderView
				width={72}
				height={32}
				color={ghostWhite}
				borderWidth={24}
				borderRadius={32}
				style={defaultShadow}
				noShadow>
				<SwiperInner />
			</NeuBorderView>
			<SwiperOuter>
				<NeuView
					color={ghostWhite}
					height={26}
					width={26}
					borderRadius={26}
					convex
					style={defaultShadow}
				/>
			</SwiperOuter>
		</Wrapper>
	);
};

Swiper.propTypes = {
	onPress: PropTypes.func,
};

Swiper.defaultProps = {
	onPress: () => {},
};

export default withTheme(Swiper);
