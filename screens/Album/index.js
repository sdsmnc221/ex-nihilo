import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import NavigationBar from '../../sharedUI/NavigationBar';
import PhotoThumbnail from '../../sharedUI/PhotoThumbnail';
import Icon from '../../sharedUI/Icon';

const PhotoGrid = styled.ScrollView`
	width: 100%;
	background-color: #fff;
	margin-bottom: 40px;
`;

const LockOverlay = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const IconWrapper = styled.View`
	margin-bottom: 32px;
`;

const Title = styled.Text`
	margin-bottom: 12px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
`;

const Input = styled.TextInput`
	width: 64%;
	background-color: #e8e8e8;
	font-size: 12px;
	text-align: center;
	padding: 8px;
`;

const AlbumScreen = ({ navigation }) => {
	const deviceW = Dimensions.get('window').width;
	const photoSize = deviceW / 3;
	const photoNb = 32;

	const [isLocked, setIsLocked] = useState(true);
	const [passwordInput, setPasswordInput] = useState('');

	const onSubmitPassword = () => setIsLocked(false);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<PhotoGrid contentContainerStyle={styles.photoGridContainer}>
						{[...Array(photoNb)].map((p, i) => (
							<PhotoThumbnail
								key={i}
								size={photoSize}
								color={i % 2 === 0 ? '#c4c4c4' : '#818181'}
								onPress={() => navigation.navigate('AlbumPhotoScreen', { photoId: p })}
							/>
						))}
					</PhotoGrid>
					<Modal isVisible={isLocked} style={styles.modal}>
						<LockOverlay>
							<IconWrapper>
								<Icon type="LOCK" color="#fff" />
							</IconWrapper>
							<Title>Entrer le mot de passe</Title>
							<Input
								secureTextEntry
								blurOnSubmit
								onChangeText={(text) => setPasswordInput(text)}
								onSubmitEditing={onSubmitPassword}
								value={passwordInput}
							/>
						</LockOverlay>
						<NavigationBar
							onPressHome={() => navigation.navigate('HomeScreen')}
							black
						/>
					</Modal>
				</View>
				<NavigationBar
					onPressHome={() => navigation.navigate('HomeScreen')}
					black
				/>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	photoGridContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	modal: {
		flex: 1,
		margin: 0,
	},
});

export default AlbumScreen;
