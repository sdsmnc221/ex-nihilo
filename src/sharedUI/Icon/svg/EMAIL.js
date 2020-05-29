import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const EMAIL = ({ width, height, color }) => (
	<Svg width={width} height={height} viewBox="0 0 26 19">
		<Path
			d="M25.0793 19.0006H0.352692C0.157661 19.0006 0 18.843 0 18.648V0.89859C0 0.703564 0.157661 0.545898 0.352692 0.545898H25.0793C25.2743 0.545898 25.432 0.703564 25.432 0.89859V18.648C25.432 18.843 25.2743 19.0006 25.0793 19.0006ZM0.705841 18.2953H24.7266V1.76918L25.3323 1.14314L24.8252 0.652832L24.2457 1.25174H1.18561L0.606159 0.652832L0.098999 1.14314L0.705841 1.77038V18.2953ZM7.43493 8.72566L0.705841 1.77038V1.25174H1.18561L12.7157 13.1688L24.2457 1.25174H24.7266V1.76918L17.9618 8.7612L17.8271 8.6265C17.6894 8.48843 17.4662 8.48843 17.3286 8.6265C17.1905 8.76411 17.1905 8.98739 17.3286 9.12501L17.4715 9.26795L12.969 13.9216C12.9029 13.9904 12.8109 14.0291 12.7157 14.0291C12.62 14.0291 12.5284 13.9904 12.4619 13.9216L7.92563 9.23286L8.03337 9.12512C8.17099 8.98705 8.17099 8.76423 8.03337 8.62616C7.8953 8.48855 7.67248 8.48855 7.53441 8.62616L7.43493 8.72566ZM7.43493 8.72566L7.92563 9.23286L5.59006 11.5684C5.52125 11.6372 5.43103 11.6719 5.3408 11.6719C5.25058 11.6719 5.16036 11.6372 5.09155 11.5684C4.95348 11.4308 4.95348 11.2075 5.09155 11.0695L7.43493 8.72566ZM17.4715 9.26795L19.7623 11.5592C19.8311 11.628 19.9213 11.6626 20.0116 11.6626C20.1018 11.6626 20.192 11.628 20.2608 11.5592C20.3989 11.4216 20.3989 11.1983 20.2608 11.0602L17.9618 8.7612L17.4715 9.26795Z"
			stroke="none"
			fill={color}
			fillRule="evenodd"
		/>
	</Svg>
);

EMAIL.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

EMAIL.defaultProps = {
	width: 26,
	height: 19,
	color: '#494949',
};

export default EMAIL;
