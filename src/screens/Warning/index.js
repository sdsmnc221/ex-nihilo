import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import { fonts, colors } from 'configs/theme';

const Title = styled.Text`
	color: ${colors.white};
	font-family: ${fonts.cairo.bold};
	font-size: 30px;
	letter-spacing: 1.5px;
`;

const Content = styled.Text`
	color: ${colors.white};
	font-family: ${fonts.cairo.semiBold};
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0.75px;
	text-align: center;
	margin: 56px 30px;
`;

const Button = styled.TouchableOpacity`
	background-color: ${({ active }) => (active ? colors.white : 'transparent')};
	border: 1px solid ${colors.white};
	border-radius: 50px;
	width: 50px;
	height: 50px;
	justify-content: center;
	align-items: center;
`;

const ButtonText = styled.Text`
	color: ${({ active }) => (active ? colors.slateBlue : colors.white)};
	font-family: ${fonts.cairo.semiBold};
	font-size: 15px;
	letter-spacing: 0.75px;
	text-align: center;
`;

const WarningScreen = ({ navigation }) => {
	const [buttonPressed, setButtonPressed] = useState(false);

	const onPress = () => setButtonPressed(!buttonPressed);

	useEffect(() => {
		if (buttonPressed) {
			setTimeout(() => navigation.navigate('IntroScreen'), 60);
		}
	}, [buttonPressed, navigation]);

	return (
		<SafeAreaView style={styles.body}>
			<Title>Attention</Title>
			<Content>
				L’expérience que nous vous proposons contient du contenu explicite et
				violent pouvant choquer votre sensibilité.
				{'\n'}
				Pour votre bien, nous recommandons aux personnes sensibles et aux enfants de
				ne pas y participer.
			</Content>
			<Button onPress={onPress} active={buttonPressed} activeOpacity={0.8}>
				<ButtonText active={buttonPressed}>ok</ButtonText>
			</Button>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: colors.slateBlue,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default WarningScreen;
