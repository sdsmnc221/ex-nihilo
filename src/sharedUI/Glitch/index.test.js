/**
 * A SIMPLE TEST: component Glitch rendered correctly.
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

import glitch1 from 'assets/GLITCH_1/Glitch-1-1.jpg';
import glitch1part1 from 'assets/GLITCH_1/Glitch-1-1-morceau1.jpg';
import glitch1part2 from 'assets/GLITCH_1/Glitch-1-1-morceau2.jpg';
import glitch1part3 from 'assets/GLITCH_1/Glitch-1-1-morceau3.jpg';

import glitch2 from 'assets/GLITCH_2/Glitch-2-1.jpg';
import glitch2part1 from 'assets/GLITCH_2/Glitch-2-1-morceau1.jpg';
import glitch2part2 from 'assets/GLITCH_2/Glitch-2-1-morceau2.jpg';
import glitch2part3 from 'assets/GLITCH_2/Glitch-2-1-morceau3.jpg';
import glitch2part4 from 'assets/GLITCH_2/Glitch-2-1-morceau4.jpg';

import glitch3 from 'assets/GLITCH_3/Glitch-3-1.jpg';
import glitch3part1 from 'assets/GLITCH_3/Glitch-3-1-morceau1.jpg';
import glitch3part2 from 'assets/GLITCH_3/Glitch-3-1-morceau2.jpg';
import glitch3part3 from 'assets/GLITCH_3/Glitch-3-1-morceau3.jpg';
import glitch3part4 from 'assets/GLITCH_3/Glitch-3-1-morceau4.jpg';
import glitch3part5 from 'assets/GLITCH_3/Glitch-3-1-morceau5.jpg';

const Glitch = () => {
	const [firstGlitch, setFirstGlitch] = useState({
		glitch: [
			{
				part: 'full',
				uri: glitch1,
			},
			{
				part: 'morceau',
				uri: glitch1part1,
			},
			{
				part: 'morceau',
				uri: glitch1part2,
			},
			{
				part: 'morceau',
				uri: glitch1part3,
			},
		],
	});
	const [secondGlitch, setSecondGlitch] = useState({
		glitch: [
			{
				part: 'full',
				uri: glitch2,
			},
			{
				part: 'morceau',
				uri: glitch2part1,
			},
			{
				part: 'morceau',
				uri: glitch2part2,
			},
			{
				part: 'morceau',
				uri: glitch2part3,
			},
			{
				part: 'morceau',
				uri: glitch2part4,
			},
		],
	});
	const [thirdGlitch, setThirdGlitch] = useState({
		glitch: [
			{
				part: 'full',
				uri: glitch3,
			},
			{
				part: 'morceau',
				uri: glitch3part1,
			},
			{
				part: 'morceau',
				uri: glitch3part2,
			},
			{
				part: 'morceau',
				uri: glitch3part3,
			},
			{
				part: 'morceau',
				uri: glitch3part4,
			},
			{
				part: 'morceau',
				uri: glitch3part5,
			},
		],
	});
	const [glitch, setGlitch] = useState([firstGlitch, secondGlitch, thirdGlitch]);

	const rndNumber = (minNumber, maxNumber) => {
		return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	};

	const glitchRnd = () => {
		let firstNb = rndNumber(0, 2);
		let secondNb = rndNumber(0, glitch[firstNb].glitch.length - 1);
		// console.log(firstNb)
		// console.log(secondNb)
		if (glitch[firstNb].glitch[secondNb].part === 'morceau') {
			let topN = rndNumber(0, 80);
			let leftN = rndNumber(0, 50);
			return (
				<Image
					style={{
						width: Dimensions.get('window').width,
						top: `${topN}%`,
						left: `${leftN}%`,
					}}
					source={glitch[firstNb].glitch[secondNb].uri}
				/>
			);
		} else {
			let heightN = Dimensions.get('window').height;
			return (
				<Image
					style={{ width: Dimensions.get('window').width, height: heightN }}
					source={glitch[firstNb].glitch[secondNb].uri}
				/>
			);
		}
	};

	useEffect(() => {
		return function cleanup() {
			console.log('unMount');
		};
	});

	return (
		<>
			<View style={styles.container} pointerEvents="none">
				{glitchRnd()}
				{glitchRnd()}
				{glitchRnd()}
				{glitchRnd()}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%',
		elevation: 100,
	},
});

export default Glitch;

it('renders Glitch correctly', () => {
	const tree = renderer.create(<Glitch />).toJSON();
	expect(tree).toMatchSnapshot();
});
