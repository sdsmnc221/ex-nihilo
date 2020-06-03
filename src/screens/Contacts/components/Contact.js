import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components';

import FlexDiv from 'sharedUI/FlexDiv';
import AppIcon from 'sharedUI/AppIcon';
import StarButton from 'sharedUI/Button/StarButton';

const Wrapper = styled.TouchableOpacity`
	${({ theme }) => theme.styles.flex(null, null, null, true)}
	margin-bottom: 12px;
	padding: 0 24px;
`;

const Title = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.27px;
	${({ theme }) => theme.styles.os.h3};
`;

const PhoneNumber = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.22px;
	${({ theme }) => theme.styles.os.body};
`;

const Contact = ({ contact, onPress }) => {
	const { name, number, star } = contact;

	return (
		<Wrapper onPress={onPress} activeOpacity={0.6}>
			<FlexDiv direction="row" justifyContent="flex-start" fullWidth>
				<StarButton
					initialActive={star}
					additionalStyle={`${css`
						margin-right: 12px;
					`}`}
					useImg
				/>
				<AppIcon size={45} type="PERSON" noBlink />
				<FlexDiv
					alignItems="flex-start"
					additionalStyle={`${css`
						width: 80%;
						margin-left: 16px;
					`}`}>
					<Title>{name || number}</Title>
					{name && <PhoneNumber>{number}</PhoneNumber>}
				</FlexDiv>
			</FlexDiv>
		</Wrapper>
	);
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	onPress: PropTypes.func,
};

Contact.defaultProps = {
	onPress: () => {},
};

export default Contact;
