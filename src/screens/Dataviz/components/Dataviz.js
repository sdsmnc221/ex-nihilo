import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

import WebScreen from 'sharedUI/WebScreen';

import { URL_DATAVIZ } from 'configs';

const Dataviz = ({ ...webScreenprops }) => {
	return <WebScreen url={URL_DATAVIZ} {...webScreenprops} />;
};

Dataviz.propTypes = {};

Dataviz.defaultProps = {};

export default withTheme(Dataviz);
