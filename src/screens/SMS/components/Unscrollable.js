import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const StyledText = styled.Text`
	margin-top: 20%;
	margin-bottom: 20px;
	width: 100%;
	color: ${({ theme }) => theme.colors.charcoal};
	font-family: ${({ theme }) => theme.fonts.sourceSans.regular};
	font-size: 10px;
	text-align: center;
`;

const Unscrollable = () => (
	<StyledText>Impossible de charger plus de messages</StyledText>
);

export default Unscrollable;
