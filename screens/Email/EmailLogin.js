import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import NavigationBar from '../../sharedUI/NavigationBar';
import Icon from '../../sharedUI/Icon';

const LogoContainer = styled.View`
	width: 100%;
	height: 218px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContentContainer = styled.View`
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 32px 24px;
	position: relative;
`;

const Title = styled.Text`
	position: absolute;
	top: 36px;
	width: 72%;
	text-align: left;
	font-size: 24px;
`;

const Input = styled.TextInput`
	width: 72%;
	height: 41px;
	background-color: #e8e8e8;
	font-size: 12px;
	text-align: left;
	padding: 8px 16px;
	margin-bottom: 36px;
`;

const Button = styled.TouchableOpacity`
	width: 72%;
	height: 41px;
	background-color: #c4c4c4;
	margin-bottom: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledText = styled.Text`
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
	font-size: ${({ size }) => size}px;
	text-align: center;
	margin: ${({ margin }) => margin || 0};
`;

const SeparatorContainer = styled.View`
	margin-bottom: 36px;
`;

const Separator = styled.View`
	margin-top: 18px;
	height: 2px;
	width: 220px;
	background-color: #565656;
`;

const EmailLoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('sam.blanchard@gmail.com');
	const [password, setPassword] = useState('');

	const onSubmit = () => navigation.navigate('EmailScreen');

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<LogoContainer>
						<Icon type="EMAIL_XL" />
					</LogoContainer>
					<ContentContainer>
						<Title>Connexion</Title>
						<Input value={email} onChangeText={(text) => setEmail(text)} />
						<Input
							value={password}
							secureTextEntry
							blurOnSubmit
							onSubmitEditing={onSubmit}
							onChangeText={(text) => setPassword(text)}
						/>
						<Button onPress={onSubmit}>
							<StyledText size={14} bold>
								Connexion
							</StyledText>
						</Button>
						<SeparatorContainer>
							<StyledText size={13} bold>
								Mot de passe oublié ?
							</StyledText>
							<Separator />
						</SeparatorContainer>
						<Button>
							<StyledText size={14} bold>
								Se créer un compte
							</StyledText>
						</Button>
					</ContentContainer>
					<NavigationBar
						onPressHome={() => navigation.navigate('HomeScreen')}
						black
					/>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	input: {
		width: '72%',
		height: 41,
		backgroundColor: '#e8e8e8',
		fontSize: 12,
		textAlign: 'center',
		padding: 8,
	},
});

export default EmailLoginScreen;
