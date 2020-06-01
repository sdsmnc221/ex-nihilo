import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import Icon from 'sharedUI/Icon';
import IconButton from 'sharedUI/Button/IconButton';

import { device } from 'utils';
import { HEADER_OPTIONS } from './configs';

const Wrapper = styled.View`
	${({ theme }) => theme.styles.flex('flex-start', null, 'row', true)}
	min-height: ${device().height * HEADER_OPTIONS.minHeight}px;
    padding-left: ${HEADER_OPTIONS.padding.left}px;
    padding-right: ${HEADER_OPTIONS.padding.right}px;
    background-color: ${({ theme }) => theme.colors.ghostWhite};
`;

const Title = styled.Text`
    ${({ theme }) => theme.styles.os.h1}
    color: ${({ theme }) => theme.colors.whiskey};
    letter-spacing: 1.6px;
`;

const BasicHeader = ({ title }) => (
	<Wrapper>{title && <Title>{title}</Title>}</Wrapper>
);

BasicHeader.propTypes = {
	title: PropTypes.string,
};

BasicHeader.defaultProps = {
	title: null,
};

export default BasicHeader;