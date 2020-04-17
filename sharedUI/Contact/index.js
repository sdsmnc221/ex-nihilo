import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import PlaceHolder from '../PlaceHolder';

import { truncate } from '../../utils';

const Wrapper = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	background-color: #fff;
	margin-bottom: ${({ withSpacing }) => (withSpacing ? 36 : 0)}px;
	padding: 12px 36px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Content = styled.View`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-left: 16px;
	margin-top: 2px;
`;

const Title = styled.Text`
	font-size: 13px;
	font-weight: bold;
`;

const Contact = ({ withSpacing, title, onPress }) => {
	return (
		<Wrapper withSpacing={withSpacing} onPress={onPress}>
			<PlaceHolder color="#c4c4c4" size={50} round />
			<Content>
				<Title>{title}</Title>
			</Content>
		</Wrapper>
	);
};

Contact.propTypes = {
	withSpacing: PropTypes.bool,
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};

Contact.defaultProps = {
	withSpacing: true,
	onPress: () => {},
};

export default Contact;
