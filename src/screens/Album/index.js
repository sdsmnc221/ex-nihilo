import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components';

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
	const [albumPassword, setAlbumPassword] = useState('0d1n');

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
						{photos.slice(0, photoNb).map((p, i) => {
							const { uri } = p.node.image;
							return (
								<PhotoThumbnail
									key={i}
									size={photoSize}
									source={{ uri }}
									onPress={() => navigation.navigate('AlbumPhotoScreen', { uri })}
								/>
							);
						})}
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