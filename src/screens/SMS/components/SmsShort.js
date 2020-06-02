import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NeuView } from 'utils/react-native-neu-element';

import FlexDiv from 'sharedUI/FlexDiv';
import AppIcon from 'sharedUI/AppIcon';

import { device, truncate } from 'utils';

const TouchableWrapper = styled.TouchableOpacity`
	${({ theme }) => theme.styles.flex(null, null, null, true)}
	margin-bottom: 16px;
`;

const Wrapper = styled.View`
	padding: 8px 20px;
	${({ theme }) => theme.styles.flex('center', 'center', 'column', true)}
`;

const Subtitle = styled.Text`
	color: ${({ theme }) => theme.colors.charcoal};
	line-height: ${({ theme }) => theme.typo.sizesNb.subtitle - 1}px;
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

const SmsShort = ({ theme, date, title, message, onPress }) => {
	return (
		<TouchableWrapper onPress={onPress} activeOpacity={0.8}>
			<NeuView
				width={device().width * 0.84}
				height={84}
				color={theme.colors.ghostWhite}
				borderRadius={24}
				style={theme.shadows.notificationShadow}
				{...theme.shadows.notification}>
				<Wrapper>
					<FlexDiv direction="row" justifyContent="flex-start" fullWidth>
						<AppIcon size={45} type="PERSON" noBlink />
						<View
							css={css`
								margin-left: 12px;
							`}>
							<Title isJanus={title === 'Janus'}>{title}</Title>
							<Message>{truncate(message, 60)}</Message>
							<Subtitle>{date}</Subtitle>
						</View>
					</FlexDiv>
				</Wrapper>
			</NeuView>
		</TouchableWrapper>
	);
};

SmsShort.propTypes = {
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
