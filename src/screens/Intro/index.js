import React from 'react';
import styled, { css } from 'styled-components';
import { Text, View } from 'react-native';

import usePermissions from 'hooks/usePermissions';
import useDeviceData from 'hooks/useDeviceData';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FlatButton from 'sharedUI/Button/FlatButton';

const Content = styled.Text`
	margin-left: 12%;
	margin-right: 30%;
	color: ${({ theme }) => theme.colors.white};
	line-height: 20px;
	${({ theme }) => theme.styles.os.boldBody}
`;

const styledFlatButton = css`
	position: absolute;
	bottom: 12%;
	width: auto;
	padding: 12px 32px;
`;

const IntroScreen = ({ route, navigation }) => {
	usePermissions();
	const contacts = useDeviceData();

	const onPress = () => navigation.navigate('NotificationsScreen', { contacts });

	return (
		<LayoutWrapper screenName={route.name}>
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
				Vous décidez de garder le téléphone... et d’essayer de retrouver son
				propriétaire.
			</Content>
			<FlatButton
				text="commencer"
				additionalStyle={`${styledFlatButton}`}
				pressHandler={onPress}
			/>
		</LayoutWrapper>
	);
};

export default IntroScreen;
