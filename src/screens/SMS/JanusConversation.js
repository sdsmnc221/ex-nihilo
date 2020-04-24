import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { HeaderBackButton } from '@react-navigation/stack';
import styled from 'styled-components';

import SmsMessage from './components/SmsMessage';
import NavigationBar from 'sharedUI/NavigationBar';
import IconButton from 'sharedUI/Button/IconButton';

const SmsList = styled.ScrollView`
	width: 100%;
	background-color: #fff;
`;

const Date = styled.Text`
	font-size: 10px;
	color: #565656;
	text-align: center;
	margin-top: 12px;
`;

const InputWrapper = styled.View`
	height: 40%;
	width: 100%;
	margin-top: 12px;
`;

const InputField = styled.TextInput`
	height: 44px;
	padding: 0 18px;
	background-color: #c4c4c4;
	color: #818181;
	font-size: 10px;
`;

const ChoicesWrapper = styled.View`
	width: 100%;
	flex: 1;
	background-color: #e8e8e8;
	justify-content: center;
	align-items: center;
`;

const NoChoice = styled.Text`
	font-size: 11px;
	color: #818181;
`;

const JanusConversation = ({ navigation }) => {
	navigation.setOptions({
		headerTitle: 'Janus',
		headerLeft: () => (
			<HeaderBackButton onPress={() => navigation.navigate('SmsScreen')} />
		),
	});

	const smsListRef = useRef(null);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<SmsList
						ref={smsListRef}
						onContentSizeChange={() =>
							smsListRef.current?.scrollToEnd({ animated: true })
						}>
						<SmsMessage message="Lorem ipsum dolor sit amet" />
						<SmsMessage hasPlaceholder message="Lorem ipsum dolor sit amet" />

						<SmsMessage
							isUser
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>

						<SmsMessage message="Lorem ipsum dolor sit amet" />
						<SmsMessage
							hasPlaceholder
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>

						<Date>10:42</Date>

						<SmsMessage
							isUser
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>

						<SmsMessage
							hasPlaceholder
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
						/>

						<Date>15:12</Date>

						<SmsMessage
							isUser
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>

						<SmsMessage
							hasPlaceholder
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
						/>

						<SmsMessage
							hasPlaceholder
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
						/>
						<SmsMessage
							hasPlaceholder
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
						/>
						<SmsMessage
							hasPlaceholder
							message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo."
						/>
					</SmsList>
					<InputWrapper>
						<InputField editable={false} value={'Écrire un SMS...'} />
						<IconButton type="SEND" noBlink additionalStyles={styles.sendIcon} />
						<ChoicesWrapper>
							<NoChoice>Pas de réponses disponibles pour le moment.</NoChoice>
						</ChoicesWrapper>
					</InputWrapper>
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
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 40,
	},
	sendIcon: {
		position: 'absolute',
		right: 12,
		top: 12,
	},
});

export default JanusConversation;
