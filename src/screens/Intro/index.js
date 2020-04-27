import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import usePermissions from 'hooks/usePermissions';

import Icon from 'sharedUI/Icon';

const Content = styled.Text`
	color: #e8e8e8;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
	padding: 0 48px;
	margin-bottom: 24%;
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

const IntroScreen = ({ navigation }) => {
	const contacts = usePermissions();

	const onPress = () => navigation.navigate('NotificationsScreen', { contacts });

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<Content>
						Vous êtes dans la rue, vous vous baladez quand tout à coup vous entendez
						un téléphone sonner.
						{'\n'}
						Vous regardez autour de vous et vous découvrez que la sonnerie vient d’un
						téléphone sur le sol.
						{'\n'}
						Vous demandez autour de vous si ce téléphone appartient à quelqu’un, mais
						ce n’est pas le cas.
						{'\n'}
						{'\n'}
						{'\n'}
						Vous décidez de garder le téléphone... et d’essayer de retrouver son
						propriétaire.
					</Content>
					<Button onPress={onPress}>
						<ButtonText>Jouer</ButtonText>
						<Icon type="ARROW_LEFT" />
					</Button>
				</View>
			</SafeAreaView>
		</>
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

export default IntroScreen;
