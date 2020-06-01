import React from 'react';
import styled from 'styled-components';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import PlaceHolder from 'sharedUI/PlaceHolder';
import AddButton from 'sharedUI/Button/AddButton';
import FacebookPost from './components/FacebookPost';

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

const Status = styled.View`
	width: 100%;
	height: 100px;
	background-color: #c4c4c4;
	padding: 16px 24px;
	justify-content: space-between;
`;

const Stories = styled.View`
	width: 100%;
	height: 184px;
	background-color: #c4c4c4;
	padding: 16px 24px;
	margin-top: 40px;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
`;

const Feeds = styled.View`
	width: 100%;
	background-color: #fff;
	margin-top: 40px;
	margin-bottom: 48px;
`;

const Story = ({ text, last }) => (
	<View style={!last && styles.story}>
		<PlaceHolder width={100} height={164} color="#818181" text={text} />
	</View>
);

const PlaceHolderWithSpacing = ({ spacing, size, color, round }) => (
	<View style={{ marginRight: spacing }}>
		<PlaceHolder size={size} color={color} round={round} />
	</View>
);

const storiesAddButtonPosition = {
	left: '28px',
	top: '24px',
	right: 'auto',
	bottom: 'auto',
};

const FacebookScreen = ({ route, navigation }) => {
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
		<LayoutWrapper screenName={route.name}>
			<ScrollView contentContainerStyle={styles.scrollBody}>
				<Header>
					<Row fullWidth>
						<PlaceHolder
							width={125}
							height={25}
							color="#c4c4c4"
							text="Logo Facebook"
						/>
						<Row>
							<PlaceHolderWithSpacing spacing={12} size={25} color="#c4c4c4" round />
							<PlaceHolder size={25} color="#c4c4c4" round />
						</Row>
					</Row>
					<Row fullWidth>
						{[...Array(5)].map((e, i) => (
							<PlaceHolder key={i} size={25} color="#c4c4c4" />
						))}
					</Row>
				</Header>
				<Status>
					<Row fullWidth>
						<PlaceHolder size={30} color="#818181" round />
						<PlaceHolder width={284} height={25} color="#818181" />
					</Row>
					<Row fullWidth>
						{statusBtns.map((e, i) => (
							<PlaceHolder key={i} width={100} height={25} color="#e8e8e8" text={e} />
						))}
					</Row>
				</Status>
				<Stories>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.storiesContainer}>
						{stories.map((e, i) => (
							<Story key={i} text={e} last={i === stories.length - 1} />
						))}
					</ScrollView>
					<AddButton
						position={storiesAddButtonPosition}
						size={26}
						iconW={13.93}
						iconH={16.07}
					/>
				</Stories>
				<Feeds>
					{posts.map((p, i) => (
						<FacebookPost key={i} user={p.user} date={p.date} content={p.content} />
					))}
				</Feeds>
			</ScrollView>
		</LayoutWrapper>
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
	story: {
		marginRight: 12,
	},
});

export default FacebookScreen;
