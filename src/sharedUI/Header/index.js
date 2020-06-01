import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from './BasicHeader';
import DarkHeader from './DarkHeader';

import { HEADER_TYPES } from './configs';

const renderHeader = (type, title) => {
	switch (type) {
		case HEADER_TYPES.DARK:
			return <DarkHeader title={title} />;
		default:
			return <BasicHeader title={title} />;
	}
};

const Header = ({ title, type }) => <>{renderHeader(type, title)}</>;

Header.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
};

Header.defaultProps = {
	title: null,
	type: null,
};

export default Header;
