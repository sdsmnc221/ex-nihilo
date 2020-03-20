import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled, { css } from 'styled-components';

const Wrapper = styled.View`
  background-color: #565656;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  /* ${({size}) => css`
    width: ${size}px;
    height: ${size}px;
  `} */
`;

const PlaceHolder = ({ size }) => <Wrapper size={size} />;

PlaceHolder.propTypes = {
    size: PropTypes.number,
};

PlaceHolder.defaultProps = {
    size: 50,
};

export default PlaceHolder;
