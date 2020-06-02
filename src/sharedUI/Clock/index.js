import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled, { withTheme } from 'styled-components';
import moment from 'moment';

import { fonts, colors, shadows } from 'configs/theme';

const Wrapper = styled.View`
	position: absolute;
	top: 12%;
`;

const Time = styled.Text`
	font-family: ${fonts.cairo.bold};
	font-size: 90px;
	letter-spacing: 1.8px;
	line-height: 80px;
	color: ${colors.ghostWhite};
	padding-top: 40px;
`;

const Date = styled.Text`
	font-family: ${fonts.sourceSans.semiBold};
	font-size: 12px;
	text-transform: lowercase;
	color: ${colors.white};
	top: -40px;
`;

const Clock = ({ theme }) => {
	const { default: shadow } = theme.shadows;
	const now = moment().format('LLLL');
	const [time, setTime] = useState(now.slice(-5));
	const [date, setDate] = useState(
		now.slice(0, now.length - time.length).trim()
	);

	const tick = () => {
		const now_ = moment().format('LLLL');
		setTime(now_.slice(-5));
		setDate(now_.slice(0, now.length - time.length).trim());
	};

	useEffect(() => {
		let timerID = setInterval(tick, 1000);
		return () => {
			clearInterval(timerID);
		};
	}, []);

	return (
		<Wrapper>
			<Time style={shadow}>
				{time.slice(0, 2)}
				{'\n'}
				{time.slice(-2)}
			</Time>
			<Date style={shadow}>{date}</Date>
		</Wrapper>
	);
};

export default withTheme(Clock);
