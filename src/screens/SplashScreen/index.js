import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

import Icon from 'sharedUI/Icon';

import { fonts, colors } from 'configs/theme';

const Loader = styled.Text`
	margin-top: 50px;
	color: ${colors.white};
	font-family: ${fonts.cairo.light};
	font-size: 15px;
	letter-spacing: 0.75px;
`;

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => navigation.navigate('WarningScreen'), 3200);
	}, []);

	return (
		<SafeAreaView style={styles.body}>
			<Icon type="LOGO" />
			<Loader>loading</Loader>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: colors.black,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default SplashScreen;
