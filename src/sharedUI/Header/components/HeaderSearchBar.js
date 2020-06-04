import React, { useState } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NeuView } from 'utils/react-native-neu-element';

import FlexDiv from 'sharedUI/FlexDiv';
import AppIcon from 'sharedUI/AppIcon';
import StyledIcon from 'sharedUI/Icon/StyledIcon';

import { rgba } from 'utils';
import { SIZES } from 'configs';

const SearchInput = styled.TextInput`
	width: 100%;
	height: 100%;
	background-color: transparent;
	border-radius: 30px;
	padding: 0 18px;
	text-align: center;
	color: ${({ theme }) => rgba(theme.colors.charcoalAlpha, 0.32)};
	${({ theme }) => theme.styles.input};
`;

const HeaderSearchBar = ({ theme }) => {
	const { ghostWhite, persianRed } = theme.colors;
	const { softNeomorphism: softShadow, defaultShadow } = theme.shadows;

	const searchPlaceHolder = 'Rechercher dans messages...';
	const [searchValue, setSearchValue] = useState(searchPlaceHolder);
	const [inputFocused, setInputFocused] = useState(false);

	const onSearchFocus = () => {
		setSearchValue('');
		setInputFocused(true);
	};

	const onSearchBlur = () => setInputFocused(false);

	return (
		<FlexDiv
			direction="row"
			fullWidth
			justifyContent="space-between"
			additionalStyle={`${css`
				padding: 16px 20px;
			`}`}>
			<AppIcon size={30} type="HAMBURGER" noBlink {...softShadow} />
			<View
				css={`
					${css`
						position: relative;
					`}
				`}>
				<NeuView
					color={ghostWhite}
					width={SIZES.HEADER_SEARCH_BAR.W}
					height={SIZES.HEADER_SEARCH_BAR.H}
					borderRadius={SIZES.HEADER_SEARCH_BAR.R}
					inset={inputFocused}
					style={defaultShadow}
					{...softShadow}>
					<SearchInput
						value={searchValue}
						blurOnSubmit
						clearTextOnFocus
						onFocus={onSearchFocus}
						onBlur={onSearchBlur}
						onSubmitEditing={onSearchBlur}
						onEndEditing={() =>
							searchValue === '' && setSearchValue(searchPlaceHolder)
						}
						onChangeText={(text) => setSearchValue(text)}
					/>
				</NeuView>
				{!inputFocused && (
					<StyledIcon
						type="TEXT_CURSOR"
						width={19}
						height={19}
						additionalStyle={css`
							position: absolute;
							top: 5px;
							left: 10px;
						`}
					/>
				)}
				<StyledIcon
					type="SEARCH"
					width={18}
					height={18}
					color={persianRed}
					additionalStyle={css`
						position: absolute;
						top: 6px;
						right: 12px;
					`}
				/>
			</View>
		</FlexDiv>
	);
};

export default withTheme(HeaderSearchBar);
