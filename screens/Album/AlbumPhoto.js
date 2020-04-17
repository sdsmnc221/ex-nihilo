import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import NavigationBar from '../../sharedUI/NavigationBar';
import Icon from '../../sharedUI/Icon';

const AlbumPhotoScreen = ({ route, navigation }) => {
	console.log(route);

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<Icon type="PHOTO_XL" />
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
		backgroundColor: '#c4c4c4',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default AlbumPhotoScreen;
