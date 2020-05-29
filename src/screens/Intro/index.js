import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import usePermissions from 'hooks/usePermissions';
import useDeviceData from 'hooks/useDeviceData';

import FlatButton from 'sharedUI/Button/FlatButton';

const Content = styled.Text`
	margin-left: 10%;
	margin-right: 40%;
	color: ${({ theme }) => theme.colors.white};
	line-height: 18px;
	${({ theme }) => theme.styles.os.boldBody}
`;

const styledFlatButton = css`
	position: absolute;
	bottom: 12%;
	width: auto;
	padding: 12px 32px;
`;

const IntroScreen = ({ navigation, theme }) => {
	usePermissions();
	const contacts = useDeviceData();

	const onPress = () => navigation.navigate('NotificationsScreen', { contacts });

	return (
		<SafeAreaView
			css={`
				${theme.styles.body(theme.colors.charcoal)}
			`}>
			<Content>
				Vous êtes dans la rue,
				{'\n'}
				vous vous baladez quand tout à coup vous entendez un téléphone sonner.
				{'\n'}
				Vous regardez autour de vous et vous découvrez que la sonnerie vient d’un
				téléphone sur le sol.
				{'\n'}
				Vous demandez autour de vous si ce téléphone appartient à quelqu’un, mais ce
				n’est pas le cas.
				{'\n'}
				{'\n'}
				{'\n'}
				Vous décidez de garder le téléphone... et d’essayer de retrouver
				{'\n'}
				son
				{'\n'}
				propriétaire.
			</Content>
			<FlatButton
				text="commencer"
				additionalStyle={`${styledFlatButton}`}
				pressHandler={onPress}
			/>
		</SafeAreaView>
	);
};

export default withTheme(IntroScreen);
