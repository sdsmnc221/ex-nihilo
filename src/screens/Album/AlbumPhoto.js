import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';

const AlbumPhotoScreen = ({ route, navigation }) => {
	const { uri } = route.params;
	const { width: deviceW, height: deviceH } = Dimensions.get('window');

	return (
		<LayoutWrapper screenName={route.name}>
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
		</LayoutWrapper>
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
