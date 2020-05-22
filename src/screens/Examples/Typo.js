import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

import NavigationBar from 'sharedUI/NavigationBar';

import theme from 'configs/theme';
import typo from 'configs/typo';

const { colors } = theme;
const { os, dataviz } = typo;

const Title = styled.Text`
	font-size: 25px;
	font-weight: bold;
	color: #707070;
	margin: 12px 0;
`;

const StyledText = styled.Text`
	margin: 6px 0;
`;

const TypoScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.body}>
			<View style={styles.body}>
				<Title>OS</Title>

				<StyledText
					css={`
							${os.h1}
                            color: ${colors.whiskey};
						`}>
					H1 Titre:{'\n'}Cairo Semi Bold 32px.
				</StyledText>

				<StyledText
					css={`
							${os.h2}
                            color: ${colors.whiskey};
						`}>
					H2 Titre:{'\n'}Cairo Bold 24px.
				</StyledText>

				<StyledText
					css={`
							${os.h3}
                            color: ${colors.charcoal};
						`}>
					H3 Titre:{'\n'}Source Sans Pro Bold 14px.
				</StyledText>

				<StyledText
					css={`
							${os.body}
                            color: ${colors.black};
						`}>
					Body:{'\n'}Source Sans Pro Medium 14px.
				</StyledText>

				<StyledText
					css={`
							${os.bodyAlternativeA}
                            color: ${colors.black};
						`}>
					Body:{'\n'}Acumin Pro Medium 14px.
				</StyledText>

				<StyledText
					css={`
							${os.bodyAlternativeB}
                            color: ${colors.black};
						`}>
					Body:{'\n'}Source Sans Pro Regular 14px.
				</StyledText>

				<StyledText
					css={`
							${os.subtitle}
                            color: ${colors.black};
						`}>
					Sous-titre:{'\n'}Source Sans Pro Extra Light 11px.
				</StyledText>

				<Title>Dataviz</Title>
			</View>
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} black />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 24,
	},
});

export default TypoScreen;
