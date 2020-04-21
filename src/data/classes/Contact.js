import { cleanLineBreaks } from 'utils';

export default class Contact {
	constructor({ name, phoneNumber, email, dob, address, hasSMS }) {
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.dob = dob;
		this.address = cleanLineBreaks(address);
		this.hasSMS = hasSMS;
	}
}
