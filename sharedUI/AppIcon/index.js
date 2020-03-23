import React from 'react';
import PropTypes from 'prop-types';
import { View , Text} from 'react-native';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from '../Icon';

const Wrapper = styled.View`
  position: relative;
  background-color: #e8e8e8;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  margin: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotifsCount = styled.Text`
    color: #c4c4c4;
    background-color: #565656;
    font-size: 11px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
`;

const AppIcon = ({ type, notifs, size, active, onPress }) => active ?
    (<TouchableOpacity onPress={onPress}>
        <Wrapper size={size}>
            {notifs > 0 && <NotifsCount>{notifs}</NotifsCount>}
            <Icon type={type} />
        </Wrapper>
    </TouchableOpacity>) :
    (<Wrapper size={size}>
        {notifs > 0 && <NotifsCount>{notifs}</NotifsCount>}
        <Icon type={type} />
    </Wrapper>);

AppIcon.propTypes = {
    type: PropTypes.string,
    notifs: PropTypes.number,
    size: PropTypes.number,
    active: PropTypes.bool,
    onPress: PropTypes.func,
};

AppIcon.defaultProps = {
    type: '',
    notifs: 0,
    size: 45,
    active: false,
    onPress: () => {},
};

export default AppIcon;
