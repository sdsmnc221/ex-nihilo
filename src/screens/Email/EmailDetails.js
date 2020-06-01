import React from 'react';
import styled from 'styled-components';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import StarButton from 'sharedUI/Button/StarButton';
import PlaceHolder from 'sharedUI/PlaceHolder';
import IconButton from 'sharedUI/Button/IconButton';

const Header = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	padding: 24px;
	background-color: #fff;
`;

const Group = styled.View`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	flex-direction: ${({ dir }) => dir};
	justify-content: ${({ justify }) => justify || 'center'};
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

const SubHeader = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 24px;
	background-color: #fff;
`;

const Sender = styled.Text`
	font-size: 13px;
	margin-left: 36px;
	margin-right: 8px;
`;

const Recipient = styled.Text`
	font-size: 9px;
	color: #818181;
	margin-left: 36px;
	margin-top: 4px;
`;

const Date = styled.Text`
	font-size: 9px;
	color: #818181;
	top: 1.4px;
`;

const Content = styled.View`
	position: relative;
	width: 100%;
	flex: 1;
	padding: 24px;
	background-color: #fff;
`;

const Message = styled.Text`
	font-size: 12px;
	line-height: 20px;
	padding-right: 16px;
`;

const Gap = styled.View`
	height: 120px;
`;

const EmailDetailsScreen = ({ route, navigation }) => {
	const { email } = route.params;
	const { sender, date, title, message, starred } = email;

	const groupButtons = ['Répondre', 'Répondre à tous', 'Transférer'];

	return (
		<LayoutWrapper screenName={route.name}>
			<ScrollView contentContainerStyle={styles.scrollBody}>
				<Header>
					<Group dir="column" align="flex-start">
						<Title>{title}</Title>
						<Category>Boîte de réception</Category>
					</Group>
					<StarButton initialActive={starred} additionalStyles={styles.starIcon} />
				</Header>
				<SubHeader>
					<PlaceHolder size={30} color="#c4c4c4" round style={styles.spacingRight} />
					<Group dir="column" align="flex-start" style={styles.fullFlex}>
						<Group dir="row">
							<Sender>{sender}</Sender>
							<Date>{date}</Date>
						</Group>
						<Recipient>à Sam Blanchard</Recipient>
					</Group>
					<Group dir="row">
						<IconButton
							type="EMAIL_REPLY"
							noBlink
							additionalStyles={styles.spacingRight}
						/>
						<IconButton type="DOTS_VERTICAL" noBlink size="20" />
					</Group>
				</SubHeader>
				<Content>
					<Message>{message}</Message>
					<Gap />
				</Content>
				<Group
					dir="row"
					justify="space-between"
					fullWidth
					style={styles.groupButtons}>
					{groupButtons.map((btn, i) => (
						<PlaceHolder key={i} width={100} height={60} text={btn} color="#c4c4c4" />
					))}
				</Group>
			</ScrollView>
		</LayoutWrapper>
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
		flex: 1,
	},
	starIcon: {
		marginTop: 8,
	},
	spacingRight: {
		marginRight: 30,
	},
	fullFlex: {
		flex: 1,
	},
	groupButtons: {
		position: 'absolute',
		bottom: 64,
		paddingLeft: 24,
		paddingRight: 24,
	},
});

export default EmailDetailsScreen;
