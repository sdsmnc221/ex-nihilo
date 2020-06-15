export default class Photo {
	constructor({ isFakePhoto, source }) {
		this.isFakePhoto = isFakePhoto;
		this.source = { uri: source };
	}
}
