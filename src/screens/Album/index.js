import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import { KEY_PUZZLE_B } from 'configs';

import NavigationBar from 'sharedUI/NavigationBar';
import PasswordLock from 'sharedUI/PasswordLock';
import PhotoThumbnail from './components/PhotoThumbnail';

const PhotoGrid = styled.ScrollView`
	width: 100%;
	background-color: #fff;
	margin-bottom: 40px;
`;

const AlbumScreen = ({ navigation }) => {
	const { gallery } = useSelector((state) => state.deviceData);

	const deviceW = Dimensions.get('window').width;
	const photoSize = deviceW / 3;
	// Temporarily limit the photo numbers until
	// rework Gallery (from ScrollView to FlatList)
	const photoNb = Math.floor(gallery.count / 10);
	const { edges: photos } = gallery.photos;

	const [isLocked, setIsLocked] = useState(false);
	const [passwordInput, setPasswordInput] = useState('');
	const [albumPassword, setAlbumPassword] = useState(KEY_PUZZLE_B);

	const onSubmitPassword = () => {
		if (passwordInput === albumPassword) {
			setIsLocked(false);
		}
	};

	const renderPasswordLock = () => (
		<Modal
			isVisible={isLocked}
			style={styles.modal}
			animationInTiming={400}
			animationOutTiming={800}
			useNativeDriver>
			<PasswordLock
				hintColor="#fff"
				passwordInput={passwordInput}
				onInputPassword={(text) => setPasswordInput(text)}
				onSubmitPassword={onSubmitPassword}
			/>
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} black />
		</Modal>
	);

	return (
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
			<NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} black />
		</SafeAreaView>
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
