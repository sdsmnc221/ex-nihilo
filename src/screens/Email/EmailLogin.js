import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import NavigationBar from 'sharedUI/NavigationBar';
import Icon from 'sharedUI/Icon';

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
	top: 24px;
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
	const [emailInput, setEmailInput] = useState('sam.blanchard@gmail.com');
	const [passwordInput, setPasswordInput] = useState('');
	const [mailEmail, setMailEmail] = useState('sam.blanchard@gmail.com');
	const [mailPassword, setMailPassword] = useState('Dormiens');
	const [failed, setFailed] = useState(false);

	const onSubmit = () => {
		console.log(`${passwordInput} | ${mailPassword}`)
		console.log(`${emailInput} | ${mailEmail}`)
		if ((passwordInput !== mailPassword) || (emailInput !== mailEmail)) {
			setFailed(true)
		} else {
			navigation.navigate('EmailScreen');
		}
	}

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<LogoContainer>
						<Icon type="EMAIL_XL" />
					</LogoContainer>
					<ContentContainer>
						<Title>Connexion</Title>
						<Input value={emailInput} onChangeText={(text) => setEmailInput(text)} />
						{failed && <Text color='#DDD'>Email ou mot de passe incorrect.</Text>}
						<Input
							value={passwordInput}
							secureTextEntry
							blurOnSubmit
							onSubmitEditing={onSubmit}
							onChangeText={(text) => setPasswordInput(text)}
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
				</View>
				<NavigationBar
					onPressHome={() => navigation.navigate('HomeScreen')}
					black
				/>
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
