import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';

const DateTime = styled.View`
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
        <DateTime>
            <Time>13</Time>
            <Time>45</Time>
            <Date>Mardi 17 Mars 2020</Date>
        </DateTime>
    );
}

export default Clock;
