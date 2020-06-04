import React from 'react';
import PropTypes from 'prop-types';

import BasicHeader from './BasicHeader';
import ConversationHeader from './ConversationHeader';
import DarkHeader from './DarkHeader';
import EmailInboxHeader from './EmailInboxHeader';

import { HEADER_TYPES } from './configs';

const renderHeader = (type, title, otherConfigs) => {
	switch (type) {
		case HEADER_TYPES.CONVERSATION:
			return <ConversationHeader title={title} {...otherConfigs} />;
		case HEADER_TYPES.DARK:
			return <DarkHeader title={title} {...otherConfigs} />;
		case HEADER_TYPES.EMAIL_INBOX:
			return <EmailInboxHeader title={title} {...otherConfigs} />;
		default:
			return <BasicHeader title={title} {...otherConfigs} />;
	}
};

const Header = ({ title, type, ...otherConfigs }) => (
	<>{renderHeader(type, title, otherConfigs)}</>
);

Header.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
};

Header.defaultProps = {
	title: null,
	type: null,
};

export default Header;
