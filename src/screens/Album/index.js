import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import PasswordLock from 'sharedUI/PasswordLock';
import PhotoThumbnail from './components/PhotoThumbnail';

import { tick } from 'utils';
import { KEY_PUZZLE_B, NUMBERS, SCREENS, SIZES } from 'configs';

import { unlockAlbum, incrementChanges } from 'states/actions/gameActions';

const PasswordLockContainer = styled.View`
	${({ theme }) => theme.styles.flex('flex-start', 'flex-start', null, true)}
	position: absolute;
	top: ${SIZES.HEADER_H_GAP}px;
	width: 100%;
	height: ${SIZES.ALBUM_LOCK_H}px;
	padding-top: 36px;
	background-color: ${({ theme }) => theme.colors.slateBlue};
`;

const AlbumScreen = ({ route, navigation, theme }) => {
	const dispatch = useDispatch();

	const { gallerySet } = useSelector((state) => state.deviceData.misc);
	const { gallery } = useSelector((state) => state.mergedData);
	const { gallery: fakeGallery } = useSelector((state) => state.fakeData);
	const { UNLOCK_ALBUM } = useSelector((state) => state.game);

	const photoSize = SIZES.ALBUM_PHOTO;

	const PASSWORD = KEY_PUZZLE_B;
	const [isLocked, setIsLocked] = useState(!UNLOCK_ALBUM);
	const [passwordInput, setPasswordInput] = useState('');
	const [passwordValid, setPasswordValid] = useState(false);

	const onSubmitPassword = () => {
		if (passwordInput !== PASSWORD) {
			setPasswordValid(false);
		} else {
			setPasswordValid(true);
			tick(() => setIsLocked(false), NUMBERS.RESET_PRESS_DURATION_ALBUM);
			unlockAlbum(dispatch);
			incrementChanges(dispatch);
		}
	};

	const renderPasswordLock = () =>
		isLocked ? (
			<PasswordLockContainer>
				<PasswordLock
					fullBody={false}
					bodyColor={theme.colors.slateBlue}
					titleColor={theme.colors.ghostWhite}
					inputBorder
					passwordInput={passwordInput}
					passwordValid={passwordValid}
					onInputPassword={(text) => setPasswordInput(text)}
					onSubmitPassword={onSubmitPassword}
				/>
			</PasswordLockContainer>
		) : null;

	return (
		<LayoutWrapper screenName={route.name}>
			<FlatList
				css={`
					${theme.styles.list}
				`}
				data={gallerySet ? gallery.photos : fakeGallery.photos}
				keyExtractor={(item, index) => index.toString()}
				numColumns={NUMBERS.ALBUM_COLS}
				renderItem={({ item: photo }) => (
					<PhotoThumbnail
						isFakePhoto={photo.isFakePhoto}
						size={photoSize}
						source={photo.source}
						onPress={() =>
							navigation.navigate(SCREENS.ALBUM_PHOTO, {
								source: photo.source,
								isFakePhoto: photo.isFakePhoto,
							})
						}
					/>
				)}
			/>
			{renderPasswordLock()}
		</LayoutWrapper>
	);
};

export default withTheme(AlbumScreen);
