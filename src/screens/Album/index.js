import React, { useState } from 'react';
import { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import NavigationBar from 'sharedUI/NavigationBar';
import PasswordLock from 'sharedUI/PasswordLock';
import PhotoThumbnail from './components/PhotoThumbnail';

import { NUMBERS, SCREENS, SIZES } from 'configs';

const flatListStyle = css`
	width: 100%;
`;

const AlbumScreen = ({ route, navigation }) => {
	const { gallery } = useSelector((state) => state.deviceData);
	const photos = gallery.photos ? gallery.photos.edges : [];

	const photoSize = SIZES.ALBUM_PHOTO;
	const photoNb = Math.floor(gallery.count / 10);

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
			<NavigationBar transparentButtons />
		</Modal>
	);

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				css={`
					${flatListStyle}
				`}
				data={photos.slice(0, photoNb)}
				keyExtractor={(item, index) => index.toString()}
				numColumns={NUMBERS.ALBUM_COLS}
				renderItem={({ item: photo }) => {
					const { uri } = photo.node.image;
					return (
						<PhotoThumbnail
							size={photoSize}
							source={{ uri }}
							onPress={() => navigation.navigate(SCREENS.ALBUM_PHOTO, { uri })}
						/>
					);
				}}
			/>
			<FillGap />
			{renderPasswordLock()}
		</LayoutWrapper>
	);
};

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		margin: 0,
	},
});

export default AlbumScreen;
