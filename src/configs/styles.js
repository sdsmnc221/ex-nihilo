import { css } from 'styled-components';
import theme from './theme';

const { colors, fonts, size, typo } = theme;
const { acumin, cairo, sourceSans, superclarendon } = fonts;
const { sizes } = typo;

export default {
	body: (backgroundColor = colors.ghostWhite) => css`
		background-color: ${backgroundColor};
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
	`,
	flex: (
		justifyContent = 'center',
		alignItems = 'center',
		direction = 'column',
		fullWidth = false
	) => css`
		justify-content: ${justifyContent};
		align-items: ${alignItems};
		flex-direction: ${direction};
		width: ${fullWidth ? '100%' : 'auto'};
	`,
	flexWithoutSize: (
		justifyContent = 'center',
		alignItems = 'center',
		direction = 'column'
	) => css`
		justify-content: ${justifyContent};
		align-items: ${alignItems};
		flex-direction: ${direction};
	`,
};
