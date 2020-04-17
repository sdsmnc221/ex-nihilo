import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components';

import NavigationBar from '../../sharedUI/NavigationBar';
import PhotoThumbnail from '../../sharedUI/PhotoThumbnail';

const PhotoGrid = styled.ScrollView`
	width: 100%;
	background-color: #fff;
	margin-bottom: 40px;
`;

const AlbumScreen = ({ navigation }) => {
	const deviceW = Dimensions.get('window').width;
	const photoSize = deviceW / 3;
	const photoNb = 32;

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
					<NavigationBar
						onPressHome={() => navigation.navigate('HomeScreen')}
						black
					/>
				</View>
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
});

export default AlbumScreen;
