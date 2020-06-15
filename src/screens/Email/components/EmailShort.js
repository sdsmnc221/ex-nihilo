import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View, Text } from 'react-native';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { rgba, truncate } from 'utils';
import StarButton from 'sharedUI/Button/StarButton';
import FlexDiv from 'sharedUI/FlexDiv';

const Wrapper = styled.TouchableOpacity`
	height: 64px;
	margin-bottom: 20px;
	padding: 0 20px;
	${({ theme }) => theme.styles.flex('space-between', null, 'row', true)}
`;

const Sender = styled.Text`
	${({ theme }) => theme.styles.os.h3_alt}
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.34px;
	top: 8px;
`;

const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.cairo.semiBold};
	font-size: ${({ theme }) => theme.typo.sizes.body};
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.22px;
`;

const Message = styled.Text`
	font-family: ${({ theme }) => theme.fonts.cairo.light};
	font-size: 13px;
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.22px;
	top: -6px;
`;

const Date = styled.Text`
	font-family: ${({ theme }) => theme.fonts.cairo.extraLight};
	font-size: ${({ theme }) => theme.typo.sizes.subtitle};
	color: ${({ theme }) => theme.colors.charcoal};
	letter-spacing: 0.18px;
	top: 4px;
`;

const EmailShort = ({
	sender,
	date,
	title,
	message,
	starred,
	onPress,
	theme,
}) => (
	<Wrapper onPress={onPress} activeOpacity={0.6}>
		<StyledIcon
			type="PERSON"
			size={56}
			width={28}
			height={28}
			additionalStyle={theme.styles.avatar(
				rgba(theme.colors.persianRedAlpha, 0.4),
				theme.colors.white
			)}
		/>
		<FlexDiv
			alignItems="flex-start"
			additionalStyle={css`
				flex: 1;
				margin-left: 10px;
			`}>
			<Sender>{sender.slice(0, sender.indexOf('@'))}</Sender>
			<Title>{title}</Title>
			<Message>{truncate(message, 32)}</Message>
		</FlexDiv>
		<FlexDiv fullHeight justifyContent="space-between">
			<Date>{date}</Date>
			<StarButton
				initialActive={starred}
				width={24}
				height={24}
				useImg
				additionalStyle={css`
					top: -12px;
				`}
			/>
		</FlexDiv>
	</Wrapper>
);

EmailShort.propTypes = {
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string,
	starred: PropTypes.bool,
	onPress: PropTypes.func,
};

EmailShort.defaultProps = {
	message: '',
	starred: false,
	onPress: () => {},
};

export default withTheme(EmailShort);
