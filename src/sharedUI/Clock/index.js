import React, { useState, useCallback } from 'react';
import styled, { withTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import { View, Text } from 'react-native';

const Wrapper = styled.View`
	position: absolute;
	top: 12%;
`;

const Time = styled.Text`
	font-family: ${({ theme }) => theme.fonts.cairo.bold};
	font-size: 88px;
	letter-spacing: 1.8px;
	line-height: 80px;
	color: ${({ theme }) => theme.colors.ghostWhite};
	text-align: center;
	padding-top: 40px;
`;

const Date = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	font-family: ${({ theme }) => theme.fonts.sourceSans.semiBold};
	font-size: ${({ theme }) => theme.typo.sizes.body};
	text-transform: lowercase;
	text-align: center;
	top: -36px;
`;

const Clock = ({ theme }) => {
	const { clock: shadowClock } = theme.shadows;

	const getTime = () => moment().format('hh:mm');
	const getDate = () => moment().format('dddd D MMM');

	const [time, setTime] = useState(getTime());
	const [date, setDate] = useState(getDate());

	const tickTime = useCallback(() => {
		const now = getTime();
		if (now !== time) {
			setTime(now);
		}
	}, [time]);

	const tickDate = useCallback(() => {
		const now = getDate();
		if (now !== date) {
			setDate(now);
		}
	}, [date]);

	useFocusEffect(() => {
		let timerID = setInterval(tickTime, 1000);
		let daterID = setInterval(tickDate, 1000);
		return () => {
			clearInterval(timerID);
			clearInterval(daterID);
		};
	}, [time, date]);

	return (
		<Wrapper>
			<Time style={shadowClock}>{time.replace(':', '\n')}</Time>
			<Date style={shadowClock}>{date}</Date>
		</Wrapper>
	);
};

export default withTheme(Clock);
