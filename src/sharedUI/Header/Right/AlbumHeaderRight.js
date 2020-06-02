import React from 'react';
import { css } from 'styled-components';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

const spacing = css`
	margin-right: 12px;
`;

const ContactsHeaderRight = () => (
	<>
		<StyledIcon type="FILTER" additionalStyle={`${spacing}`} />
		<StyledIcon
			useImg
			type="HEART"
			width={31}
			height={28}
			additionalStyle={`${spacing} ${css`
				top: 1px;
			`}`}
		/>
		<StyledIcon
			type="DOTS_VERTICAL"
			additionalStyle={`${css`
				top: -1px;
			`}`}
		/>
	</>
);

export default ContactsHeaderRight;
