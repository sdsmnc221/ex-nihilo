import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';

import NavigationBar from '../../sharedUI/NavigationBar';
import AddButton from '../../sharedUI/Button/AddButton';

import StarButton from '../../sharedUI/Button/StarButton';

const TitleWrapper = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	padding: 24px;
	background-color: #fff;
`;

const Group = styled.View`
	flex-direction: ${({ dir }) => dir};
	justify-content: center;
	align-items: ${({ align }) => align || 'center'};
`;

const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
`;

const Category = styled.Text`
	background-color: #c4c4c4;
	font-size: 9px;
	letter-spacing: 0.4px;
	padding: 2px 6px;
	margin-top: 8px;
`;

const EmailDetailsScreen = ({ route, navigation }) => {
	const { email } = route.params;
	const { sender, date, title, message, starred } = email;

	console.log(email);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<ScrollView contentContainerStyle={styles.scrollBody}>
						<TitleWrapper>
							<Group dir="column" align="flex-start">
								<Title>{title}</Title>
								<Category>Boîte de réception</Category>
							</Group>
							<StarButton initialActive={starred} additionalStyles={styles.starIcon} />
						</TitleWrapper>
					</ScrollView>
					<AddButton />
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
	scrollBody: {
		backgroundColor: '#fff',
		width: '100%',
	},
	starIcon: {
		marginTop: 8,
	},
});

export default EmailDetailsScreen;
