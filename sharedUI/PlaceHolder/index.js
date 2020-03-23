import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled, { css } from 'styled-components';

const Wrapper = styled.View`
  background-color: ${({ color }) => color};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ round, size }) => round ? size : 0}px;

  /* ${({size}) => css`
    width: ${size}px;
    height: ${size}px;
  `} */
`;

const PlaceHolder = ({ color, size, round }) => <Wrapper color={color} size={size} round={round} />;

PlaceHolder.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    round: PropTypes.bool,
};

PlaceHolder.defaultProps = {
    color: '#565656',
    size: 50,
    round: false,
};

export default PlaceHolder;
