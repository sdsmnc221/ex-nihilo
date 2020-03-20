import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled, { css } from 'styled-components';

const Wrapper = styled.View`
  background-color: #e8e8e8;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  margin: 0 6px;
`;

const AppIcon = ({ size }) => <Wrapper size={size} />;

AppIcon.propTypes = {
    size: PropTypes.number,
};

AppIcon.defaultProps = {
    size: 45,
};

export default AppIcon;
