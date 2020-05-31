import { css } from 'styled-components';
import theme from './theme';
import { FLEX } from './constants';

const { colors, fonts, size, typo } = theme;
const { acumin, cairo, sourceSans, superclarendon } = fonts;
const { sizes } = typo;
const { JUSTIFY_CONTENT, ALIGN_ITEMS, FLEX_DIRECTION } = FLEX;

const additionalStyles = {};

export { additionalStyles };

export default {
	safeAreaView: (gapForStatusBar, backgroundColor) => css`
		background-color: ${backgroundColor || colors.ghostWhite};
		padding-top: ${gapForStatusBar ? 30 : 0}px;
	`,
	body: (backgroundColor, justifyContent, alignItems) =>
		css`
			background-color: ${backgroundColor || colors.ghostWhite};
			width: 100%;
			height: 100%;
			justify-content: ${justifyContent || JUSTIFY_CONTENT};
			align-items: ${alignItems || ALIGN_ITEMS};
		`,
	flex: (justifyContent, alignItems, direction, fullWidth = false) => css`
		justify-content: ${justifyContent || JUSTIFY_CONTENT};
		align-items: ${alignItems || ALIGN_ITEMS};
		flex-direction: ${direction || FLEX_DIRECTION};
		width: ${fullWidth ? '100%' : 'auto'};
	`,
	flexWithoutSize: (justifyContent, alignItems, direction) =>
		css`
			justify-content: ${justifyContent || JUSTIFY_CONTENT};
			align-items: ${alignItems || ALIGN_ITEMS};
			flex-direction: ${direction || FLEX_DIRECTION};
		`,
};
