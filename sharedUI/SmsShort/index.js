import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import PlaceHolder from '../PlaceHolder';

import { truncate } from '../../utils';

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-bottom: ${({ withSpacing }) => withSpacing ? 36 : 0}px;
  padding: 12px 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16px;
  margin-top: 2px;
`;

const Date = styled.Text`
  font-size: 10px;
  color: #c4c4c4;
`;

const Title = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

const Message = styled.Text`
  font-size: 10px;
`;

const SmsShort = ({ withSpacing, date, title, message, onPress }) => {
    return (
        <Wrapper withSpacing={withSpacing} onPress={onPress}>
            <PlaceHolder color='#c4c4c4' size={50} round />
            <Content>
                <Title>{title}</Title>
                <Message>{truncate(message, 60)}</Message>
                <Date>{date}</Date>
            </Content>
        </Wrapper>
    );
}

SmsShort.propTypes = {
    withSpacing: PropTypes.bool,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

SmsShort.defaultProps = {
    withSpacing: true,
    message: '',
    onPress: () => {},
}

export default SmsShort;