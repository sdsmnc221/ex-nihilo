import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled, { css } from 'styled-components';

const Wrapper = styled.View`
  background-color: #e8e8e8;
  width: 100%;
  height: 64px;
  position: absolute;
  bottom: 0;
`;

const NavigationBar = () => <Wrapper />;

export default NavigationBar;
