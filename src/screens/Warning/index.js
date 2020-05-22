import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

import FlatButton from 'sharedUI/Button/FlatButton';

const Title = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.cairo.bold};
	font-size: 30px;
	letter-spacing: 1.5px;
`;

const Content = styled.Text`
	margin: 56px 30px;
	color: ${({ theme }) => theme.colors.white};
	line-height: 18px;
	text-align: center;
	${({ theme }) => theme.styles.os.boldBody}
`;

const WarningScreen = ({ navigation, theme }) => {
	const { slateBlue } = theme.colors;

	return (
		<SafeAreaView
			css={`
				${theme.styles.body(slateBlue)}
			`}>
			<Title>Attention</Title>
			<Content>
				L’expérience que nous vous proposons contient du contenu explicite et
				violent pouvant choquer votre sensibilité.
				{'\n'}
				Pour votre bien, nous recommandons aux personnes sensibles et aux enfants de
				ne pas y participer.
			</Content>
			<FlatButton
				text="ok"
				activeTextColor={slateBlue}
				pressHandler={() => navigation.navigate('IntroScreen')}
			/>
		</SafeAreaView>
	);
};
export default withTheme(WarningScreen);
