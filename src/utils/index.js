import { Dimensions } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const device = () => {
	return {
		...Dimensions.get('window'),
		navigationBarHeight: ExtraDimensions.getSoftMenuBarHeight(),
		realHeight: ExtraDimensions.getRealWindowHeight(),
	};
};

const rgba = (rgbaString, alpha) => rgbaString.replace('$a', alpha);

// Adapt from http://jsfiddle.net/qfjjS/
const replaceRandom = (string, complexity = 0.4) => {
	const randsArr = '!@#$)**($#*)($#$()$()#$%^&*()%^$#$$#$^'
		.split('')
		.sort(function() {
			return 0.5 - Math.random();
		});
	var stringArr = string.split('');
	const result = stringArr
		.map((el, i) =>
			i === 0
				? el
				: Math.random() > complexity
				? el
				: randsArr.length
				? randsArr.shift()
				: el
		)
		.join('');

	return result;
};

const replaceTemplate = (string, replaceValue, pattern = '[$]') =>
	string.replace(pattern, replaceValue);

const cleanLineBreaks = (str, withValue = ' ') =>
	str.replace(/\r?\n|\r/g, withValue);

const isArrEmpty = (array) => array.length === 0;

const find = (arr, key, value) => arr.find((element) => element[key] === value);

const flatten = (arr, depth = 1) =>
	arr.reduce(
		(a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
		[]
	);

const chunk = (arr, size) =>
	Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	);

const random = (odd = 0.5) => (Math.random() <= odd ? true : false);

const randomDate = (
	start = new Date(2020, 0, 1),
	end = new Date(2020, 4, 31)
) =>
	new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const groupBy = (arr, fn) =>
	arr
		.map(typeof fn === 'function' ? fn : (val) => val[fn])
		.reduce((acc, val, i) => {
			acc[val] = (acc[val] || []).concat(arr[i]);
			return acc;
		}, {});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const sampleSize = ([...arr], n = 1) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr.slice(0, n);
};

const shuffle = ([...arr]) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr;
};

const last = (array) => array[array.length - 1];

const sortContact = (a, b) => {
	const contactA = a.name ? a.name.toUpperCase() : '';
	const contactB = b.name ? b.name.toUpperCase() : '';
	let comparison = 0;
	if (contactA > contactB) {
		comparison = 1;
	} else if (contactA < contactB) {
		comparison = -1;
	}
	return comparison;
};

const truncate = (str, ln = 96, ellipsis = true) => {
	const cleanedStr = cleanLineBreaks(str);
	let truncatedStr = cleanedStr.substring(0, ln);
	truncatedStr += cleanedStr.length < ln ? '' : ellipsis ? '...' : '';

	return truncatedStr;
};

const tick = (cb, delay = 0) => setTimeout(cb, delay);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSections = (array, key, subKey) => {
	if (array.length === 0) {
		return [];
	}
	return Object.values(
		array.reduce((acc, item) => {
			let firstLetter = item[key || subKey][0].toLocaleUpperCase();
			if (!acc[firstLetter]) {
				acc[firstLetter] = { title: firstLetter, data: [item] };
			} else {
				acc[firstLetter].data.push(item);
			}
			return acc;
		}, {})
	);
};

export {
	chunk,
	cleanLineBreaks,
	device,
	isArrEmpty,
	find,
	flatten,
	groupBy,
	last,
	random,
	randomDate,
	replaceRandom,
	replaceTemplate,
	rgba,
	sample,
	sampleSize,
	shuffle,
	sortContact,
	tick,
	sleep,
	truncate,
	getSections,
};
