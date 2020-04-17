import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components';

import SmsMessage from '../../sharedUI/SmsMessage';
import NavigationBar from '../../sharedUI/NavigationBar';
import Icon from '../../sharedUI/Icon';
import IconButton from '../../sharedUI/Button/IconButton';

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

const InputField = styled.View`
	position: absolute;
	bottom: 40px; /* navigation bar's place */
	width: 100%;
`;

const SmsInput = styled.TextInput`
	height: 44px;
	padding: 0 18px;
	background-color: #c4c4c4;
	color: #818181;
	font-size: 10px;
`;

const SmsConversation = ({ route, navigation }) => {
	const { headerTitle } = route.params;
	navigation.setOptions({ headerTitle });

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<SmsList>
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
					</SmsList>
					<InputField>
						<SmsInput editable={false} value={'Écrire un SMS...'} />
						<IconButton
							type="SEND"
							pressOpacity={1.0}
							additionalStyles={styles.sendIcon}
						/>
					</InputField>
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
	},
	sendIcon: {
		position: 'absolute',
		right: 12,
		top: 12,
	},
});

export default SmsConversation;
