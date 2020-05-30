import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

import NavigationBar from 'sharedUI/NavigationBar';
import AppIcon from 'sharedUI/AppIcon';

import PlaceHolder from 'sharedUI/PlaceHolder';
const Wrapper = styled.View`
	width: 75%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 14px;
`;
const Separator = styled.View`
	width: 100%;
	height: 4px;
	background-color: #c4c4c4;
	margin-top: 10px;
`;

const ContactDetails = ({ route, navigation }) => {
	const { contact } = route.params;
	const { firstLetter } = route.params;
	const { title, headerStyle } = route.params;
	navigation.setOptions({ title, headerStyle });

	return (
		<SafeAreaView>
			<View style={styles.body}>
				<PlaceHolder
					color="#c4c4c4"
					size={200}
					text={firstLetter}
					textSize={48}
					round
				/>
				<Wrapper>
					<Text style={styles.name}>{contact.name}</Text>
					<AppIcon size={32} type="EDIT_CONTACTS" />
				</Wrapper>
				<Wrapper style={{ justifyContent: 'space-around', marginTop: 28 }}>
					<AppIcon size={48} type="PHONE" />
					<AppIcon size={48} type="SMS" />
					<AppIcon size={48} type="EMAIL" />
				</Wrapper>
				<Wrapper style={{ flexDirection: 'column', marginTop: 28 }}>
					<Wrapper style={{ width: '100%', justifyContent: 'space-between' }}>
						<Text>Mobile</Text>
						<Text>{contact.number}</Text>
					</Wrapper>
					<Separator />
				</Wrapper>
			</View>
			<NavigationBar transparentButtons />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	name: {
		fontSize: 26,
		fontWeight: 'bold',
	},
});

export default ContactDetails;
