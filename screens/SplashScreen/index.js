import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';

import Icon from '../../sharedUI/Icon';

const Logo = styled.View`
	background-color: #c4c4c4;
	width: 100px;
	height: 100px;
`;

const Title = styled.Text`
	margin-top: 72px;
	margin-bottom: 18px;
	font-size: 24px;
	font-weight: bold;
`;

const Baseline = styled.Text`
	font-size: 18px;
	font-weight: bold;
`;

const Loader = styled.View`
	margin-bottom: 24%;
	margin-top: 48%;
	align-items: center;
`;

const LoaderText = styled.Text`
	font-size: 12px;
	margin-top: 12px;
`;

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => navigation.navigate('WarningScreen'), 3200);
	}, []);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<Logo />
					<Title>EX NIHILO</Title>
					<Baseline>The answer is out there</Baseline>
					<Loader>
						<Icon type="LOADING" />
						<LoaderText>Loading...</LoaderText>
					</Loader>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#818181',
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});

export default SplashScreen;
