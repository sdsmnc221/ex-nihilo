import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NeuView } from 'utils/react-native-neu-element';

import FlexDiv from 'sharedUI/FlexDiv';
import AppIcon from 'sharedUI/AppIcon';

import { device, truncate } from 'utils';

const WIDTH = device().width * 0.84;

const Wrapper = styled.TouchableOpacity`
	${({ theme }) => theme.styles.flex(null, null, null, true)}
	margin-bottom: 16px;
	margin-top: ${({ isFirst }) => (isFirst ? 8 : 0)}px;
`;

const Date = styled.Text`
	top: -8px;
	left: 8px;
	color: ${({ theme }) => theme.colors.charcoal};
	line-height: ${({ theme }) => theme.typo.sizesNb.subtitle}px;
	letter-spacing: 0.19px;
	${({ theme }) => theme.styles.os.subtitle};
`;

const Title = styled.Text`
	margin-bottom: 4px;
	color: ${({ isJanus, theme }) =>
		isJanus ? theme.colors.slateBlue : theme.colors.charcoal};
	letter-spacing: 0.27px;
	${({ theme }) => theme.styles.os.h3};
`;

const Message = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.23px;
	line-height: 15px;
	${({ theme }) => theme.styles.os.body};
`;

const SmsShort = ({ theme, id, date, title, message, onPress }) => (
	<Wrapper onPress={onPress} activeOpacity={0.8} isFirst={id === 0}>
		<NeuView
			width={WIDTH}
			height={84}
			color={theme.colors.ghostWhite}
			borderRadius={13}
			{...theme.shadows.smsShort}>
			<FlexDiv
				direction="row"
				justifyContent="flex-start"
				fullWidth
				additionalStyle={css`
					padding: 0 12px;
				`}>
				<AppIcon
					size={49}
					type="PERSON"
					noBlink
					{...theme.shadows.softNeomorphism}
				/>
				<FlexDiv
					alignItems="flex-start"
					additionalStyle={css`
						margin-left: 16px;
						padding-right: 12px;
						width: 80%;
					`}>
					<FlexDiv direction="row" justifyContent="space-between" fullWidth>
						<Title isJanus={title === 'Janus'}>{title}</Title>
						<Date>{date}</Date>
					</FlexDiv>
					<Message>{truncate(message, 60)}</Message>
				</FlexDiv>
			</FlexDiv>
		</NeuView>
	</Wrapper>
);

SmsShort.propTypes = {
	id: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string,
	onPress: PropTypes.func,
};

SmsShort.defaultProps = {
	message: '',
	onPress: () => {},
};

export default withTheme(SmsShort);
