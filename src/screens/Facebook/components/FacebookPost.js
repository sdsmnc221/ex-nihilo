import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';

import PlaceHolder from 'sharedUI/PlaceHolder';
import IconButton from 'sharedUI/Button/IconButton';

const Wrapper = styled.View`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background-color: #c4c4c4;
	margin-bottom: 12px;
	padding: 12px 24px 24px 24px;
`;

const Header = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 12px;
`;

const UserWrapper = styled.View`
	flex-direction: row;
`;

const User = styled.Text`
	font-size: 11px;
	font-weight: bold;
	margin-left: 12px;
`;

const DateWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	margin-left: 12px;
`;

const Date = styled.Text`
	font-size: 10px;
`;

const Content = styled.Text`
	font-size: 10px;
	text-align: left;
	line-height: 14px;
`;

const Dot = styled.View`
	background-color: #818181;
	width: 4px;
	height: 4px;
	border-radius: 4px;
	margin: 0 6px;
`;

const FacebookPost = ({ user, date, content }) => (
	<Wrapper>
		<Header>
			<UserWrapper>
				<PlaceHolder color="#818181" size={30} round />
				<View>
					<User>{user}</User>
					<DateWrapper>
						<Date>{date}</Date>
						<Dot />
						<PlaceHolder color="#818181" size={10} round />
					</DateWrapper>
				</View>
			</UserWrapper>
			<IconButton
				type="DOTS_HORIZONTAL"
				noBlink
				additionalStyles={styles.settingsIcon}
			/>
		</Header>
		<Content>{content}</Content>
	</Wrapper>
);

const styles = StyleSheet.create({
	settingsIcon: {
		marginTop: 8,
	},
});

FacebookPost.propTypes = {
	user: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default FacebookPost;
