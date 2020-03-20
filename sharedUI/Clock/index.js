import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

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
`;

const Clock = () => {
    return (
        <Wrapper>
            <Time>13</Time>
            <Time>45</Time>
            <Date>Mardi 17 Mars 2020</Date>
        </Wrapper>
    );
};

export default Clock;
