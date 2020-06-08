import { Dimensions } from 'react-native';

const device = () => {
	return {
		...Dimensions.get('window'),
	};
};

const rgba = (rgbaString, alpha) => rgbaString.replace('$a', alpha);

const replaceTemplate = (string, replaceValue, pattern = '[$]') =>
	string.replace(pattern, replaceValue);

const cleanLineBreaks = (str, withValue = ' ') =>
	str.replace(/\r?\n|\r/g, withValue);

const isArrEmpty = (array) => array.length === 0;

const find = (arr, key, value) => arr.find((element) => element[key] === value);

const chunk = (arr, size) =>
	Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	);

const random = (odd = 0.5) => (Math.random() <= odd ? true : false);

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
	last,
	random,
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
