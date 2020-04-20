import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import NavigationBar from 'sharedUI/NavigationBar';
import PhotoThumbnail from 'sharedUI/PhotoThumbnail';
import PasswordLock from 'sharedUI/PasswordLock';

const PhotoGrid = styled.ScrollView`
	width: 100%;
	background-color: #fff;
	margin-bottom: 40px;
`;

const AlbumScreen = ({ navigation }) => {
	const deviceW = Dimensions.get('window').width;
	const photoSize = deviceW / 3;
	const photoNb = 32;

	const [isLocked, setIsLocked] = useState(true);
	const [passwordInput, setPasswordInput] = useState('');

	const onSubmitPassword = () => setIsLocked(false);

	const renderPasswordLock = () => (
		<Modal
			isVisible={isLocked}
			style={styles.modal}
			animationInTiming={400}
			animationOutTiming={800}
			useNativeDriver>
			<PasswordLock
				color="#fff"
				passwordInput={passwordInput}
				onInputPassword={(text) => setPasswordInput(text)}
				onSubmitPassword={onSubmitPassword}
			/>
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} black />
		</Modal>
	);

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
					{renderPasswordLock()}
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