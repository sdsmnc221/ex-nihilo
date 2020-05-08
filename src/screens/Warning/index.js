import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import Icon from 'sharedUI/Icon';

const Logo = styled.View`
	background-color: #c4c4c4;
	width: 58px;
	height: 58px;
	position: absolute;
	top: 84px;
`;

const Title = styled.Text`
	color: #e8e8e8;
	margin-bottom: 12px;
	font-size: 24px;
	font-weight: bold;
`;

const Content = styled.Text`
	color: #e8e8e8;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
	padding: 0 24px;
`;

const Button = styled.TouchableOpacity`
	width: 120px;
	position: absolute;
	bottom: 84px;
	background-color: #c4c4c4;
	padding: 12px 18px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const ButtonText = styled.Text`
	font-size: 14px;
	font-weight: bold;
`;

const WarningScreen = ({ navigation }) => {
	const onPress = () => navigation.navigate('IntroScreen');

	return (
		<SafeAreaView>
			<View style={styles.body}>
				<Logo />
				<Title>Warning</Title>
				<Content>
					L’expérience que nous vous proposons contient du contenu explicite et
					violent pouvant choquer votre sensibilité.
					{'\n'}
					Nous recommandons aux personnes sensibles et aux enfants de ne pas y
					participer.
				</Content>
				<Button onPress={onPress}>
					<ButtonText>Suivant </ButtonText>
					<Icon type="ARROW_LEFT" />
				</Button>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#565656',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default WarningScreen;
