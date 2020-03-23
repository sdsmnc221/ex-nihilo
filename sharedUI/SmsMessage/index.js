import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styled, { css } from 'styled-components';

import PlaceHolder from '../PlaceHolder';

const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
    margin-right: ${({ isUser }) => isUser ? 24 : 0}px;
    margin-left: ${({ isUser }) => isUser ? 0 : 24}px;
`;

const SmsText = styled.Text`
    padding: 12px;
    background-color: #c4c4c4;
    max-width: 56%;
    margin-top: 12px;
    font-size: 10px;
    color: #565656;
    margin-left: ${({ isUser, hasPlaceholder }) => isUser ? 0 : (hasPlaceholder ? 12 : 40)}px;
`

const SmsMessage = ({ isUser, hasPlaceholder, message }) => (
    <Wrapper isUser={isUser}>
        {hasPlaceholder && <PlaceHolder color='#c4c4c4' size={28} round />}
        <SmsText isUser={isUser} hasPlaceholder={hasPlaceholder}>{message}</SmsText>
    </Wrapper>
);

SmsMessage.propTypes = {
    isUser: PropTypes.bool,
    hasPlaceholder: PropTypes.bool,
    message: PropTypes.string.isRequired,
};

SmsMessage.defaultProps = {
    isUser: false,
    hasPlaceholder: false,
    message: '',
};

export default SmsMessage;
