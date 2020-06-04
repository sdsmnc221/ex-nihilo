import React from 'react';
import { css, withTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import AppIcon from 'sharedUI/AppIcon';
import IconButton from 'sharedUI/Button/IconButton';

import { SCREENS } from 'configs';

const ConversationHeaderLeft = ({ theme }) => {
	const navigation = useNavigation();

	return (
		<>
			<IconButton
				type="ARROW_LEFT"
				color={theme.colors.whiskey}
				width={19.36}
				height={13.94}
				onPress={() => navigation.navigate(SCREENS.SMS)}
				additionalStyle={css`
					margin-right: 4px;
				`}
			/>
			<AppIcon
				size={49}
				type="PERSON"
				noBlink
				withSpacing
				{...theme.shadows.softNeomorphism}
			/>
		</>
	);
};

export default withTheme(ConversationHeaderLeft);
