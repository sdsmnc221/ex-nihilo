import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import PasswordLock from 'sharedUI/PasswordLock';
import PhotoThumbnail from './components/PhotoThumbnail';

import { tick } from 'utils';
import { KEY_PUZZLE_B, NUMBERS, SCREENS, SIZES } from 'configs';

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
	const { gallery } = useSelector((state) => state.mergedData);

	const photoSize = SIZES.ALBUM_PHOTO;
	const photoNb = NUMBERS.ALBUM_DEVICE_PHOTOS;

	const PASSWORD = KEY_PUZZLE_B;
	const [isLocked, setIsLocked] = useState(false);
	const [passwordInput, setPasswordInput] = useState('');
	const [passwordValid, setPasswordValid] = useState(false);
	const [passwordSubmitted, setPasswordSubmitted] = useState(false);

	const onSubmitPassword = () => {
		setPasswordSubmitted(true);

		if (passwordInput !== PASSWORD) {
			setPasswordValid(false);
			setPasswordSubmitted(false);
		} else {
			setPasswordValid(true);
			tick(() => setIsLocked(false), NUMBERS.RESET_PRESS_DURATION_ALBUM);
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
					passwordSubmitted={passwordSubmitted}
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
				data={gallery.photos}
				keyExtractor={(item, index) => index.toString()}
				numColumns={NUMBERS.ALBUM_COLS}
				renderItem={({ item: photo }) => (
					<PhotoThumbnail
						isFakePhoto={photo.isFakePhoto}
						size={photoSize}
						source={photo.source}
						onPress={() =>
							navigation.navigate(SCREENS.ALBUM_PHOTO, { source: photo.source })
						}
					/>
				)}
			/>
			<FillGap />
			{renderPasswordLock()}
		</LayoutWrapper>
	);
};

export default withTheme(AlbumScreen);
