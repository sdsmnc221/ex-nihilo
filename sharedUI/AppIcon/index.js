import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Wrapper = styled.View`
  background-color: #e8e8e8;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  margin: 0 6px;
`;

const AppIcon = ({ size, active, onPress }) => active ?
    (<TouchableOpacity onPress={onPress}>
        <Wrapper size={size} />
    </TouchableOpacity>) :
    (<Wrapper size={size} />);

AppIcon.propTypes = {
    size: PropTypes.number,
    active: PropTypes.bool,
    onPress: PropTypes.func,
};

AppIcon.defaultProps = {
    size: 45,
    active: false,
    onPress: () => {},
};

export default AppIcon;
