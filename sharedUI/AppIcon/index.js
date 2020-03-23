import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled, { css } from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from '../Icon';

const Wrapper = styled.View`
  background-color: #e8e8e8;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  margin: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppIcon = ({ type, size, active, onPress }) => active ?
    (<TouchableOpacity onPress={onPress}>
        <Wrapper size={size}>
            <Icon type={type} />
        </Wrapper>
    </TouchableOpacity>) :
    (<Wrapper size={size}>
        <Icon type={type} />
    </Wrapper>);

AppIcon.propTypes = {
    type: PropTypes.string,
    size: PropTypes.number,
    active: PropTypes.bool,
    onPress: PropTypes.func,
};

AppIcon.defaultProps = {
    type: '',
    size: 45,
    active: false,
    onPress: () => {},
};

export default AppIcon;
