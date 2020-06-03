import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import AppIcon from 'sharedUI/AppIcon';

const Wrapper = styled.TouchableOpacity`
	${({ theme }) => theme.styles.flex(null, null, null, true)}
	margin-bottom: 12px;
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

const Contact = ({ withSpacing, contact, firstLetter, onPress }) => {
	return (
		<Wrapper withSpacing={withSpacing} onPress={onPress}>
			<AppIcon size={45} type="PERSON" noBlink />
			<Content>
				<Title>{contact.name ? contact.name : contact.number}</Title>
			</Content>
		</Wrapper>
	);
};

Contact.propTypes = {
	withSpacing: PropTypes.bool,
	contact: PropTypes.object.isRequired,
	onPress: PropTypes.func.isRequired,
};

Contact.defaultProps = {
	withSpacing: true,
	onPress: () => {},
};

export default Contact;
