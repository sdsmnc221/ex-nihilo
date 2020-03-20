import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.View`
  position: absolute;
  top: 84px;
`;

const Time = styled.Text`
  font-weight: bold;
  font-size: 96px;
  line-height: 96px;
`

const Date = styled.Text`
  font-size: 11px;
  text-transform: capitalize;
`;

const Clock = () => {
  const now = moment().format('LLLL');
  const [time, setTime] = useState(now.slice(-5));
  const [date, setDate] = useState(now.slice(0, now.indexOf(time) - 1));

  const tick = () => {
    const now = moment().format('LLLL');
    setTime(now.slice(-5));
    setDate(now.slice(0, now.indexOf(time) - 1));
  };

  useEffect(() => {
    let timerID = setInterval(tick, 1000);
    return () => {
      clearInterval(timerID);
    }
  }, [])

  return (
      <Wrapper>
          <Time>{time.slice(0, 2)}</Time>
          <Time>{time.slice(-2)}</Time>
          <Date>{date}</Date>
      </Wrapper>
  );
};

export default Clock;
