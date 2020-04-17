import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';

import NavigationBar from '../../sharedUI/NavigationBar';
import PlaceHolder from '../../sharedUI/PlaceHolder';
import FacebookPost from '../../sharedUI/FacebookPost';
import AddButton from '../../sharedUI/Button/AddButton';

const Header = styled.View`
	width: 100%;
	height: 120px;
	background-color: #fff;
	padding: 24px;
	justify-content: space-between;
`;

const Row = styled.View`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
	flex-direction: row;
	justify-content: space-between;
`;

const Feeds = styled.View`
	width: 100%;
	background-color: #fff;
	margin-top: 40px;
	margin-bottom: 48px;
`;

const EmailScreen = ({ navigation }) => {
	const statusBtns = ['En direct', 'Photo', 'Visite'];
	const stories = [
		'Ajouter à la story',
		'Marie Dupont',
		'Anne Parisi',
		'...',
		'...',
	];
	const posts = [
		{
			user: 'Marie Dupont',
			date: '1h',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.',
		},
		{
			user: 'Marie Dupont',
			date: '1h',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.',
		},
		{
			user: 'Marie Dupont',
			date: '1h',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.',
		},
		{
			user: 'Marie Dupont',
			date: '1h',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.',
		},
		{
			user: 'Marie Dupont',
			date: '1h',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.',
		},
	];

	return (
		<>
			<SafeAreaView>
				<View style={styles.body}>
					<ScrollView contentContainerStyle={styles.scrollBody}>
						<Header />
						<Feeds>
							{posts.map((p, i) => (
								<FacebookPost key={i} user={p.user} date={p.date} content={p.content} />
							))}
						</Feeds>
					</ScrollView>
					<AddButton />
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
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	scrollBody: {
		backgroundColor: '#fff',
		width: '100%',
	},
	storiesContainer: {
		margin: 0,
		padding: 0,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
});

export default EmailScreen;
