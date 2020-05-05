import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Image,
	Dimensions,
} from 'react-native';

import NavigationBar from 'sharedUI/NavigationBar';

const AlbumPhotoScreen = ({ route, navigation }) => {
	const { uri } = route.params;
	const { width: deviceW, height: deviceH } = Dimensions.get('window');

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<Image
						style={{
							width: deviceW,
							height: deviceH,
						}}
						source={{ uri }}
						resizeMode="contain"
					/>
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
		backgroundColor: '#c4c4c4',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default AlbumPhotoScreen;
