import { cleanLineBreaks, isArrEmpty, random, replaceRandom } from 'utils';
import moment from 'moment';

export default class Contact {
	constructor({
		name,
		phoneNumber,
		email,
		dob,
		address,
		hasSMS,
		fromDevice = false,
		deviceContactInfo,
	}) {
		this.fromDevice = fromDevice;
		this.star = random(0.4);

		if (!this.fromDevice) {
			this.name = name;
			this.phoneNumber = phoneNumber;
			this.email = email;
			this.dob = dob;
			this.address = cleanLineBreaks(address);
			this.hasSMS = hasSMS;
		} else {
			const {
				displayName,
				phoneNumbers,
				emailAddresses,
				birthday,
				postalAddresses,
			} = deviceContactInfo;
			this.displayName = displayName;
			this.name = replaceRandom(displayName);
			this.phoneNumber = this.getDeviceNumber(phoneNumbers);
			this.email = this.getDeviceEmail(emailAddresses);
			this.dob = this.getDeviceDOB(birthday);
			this.address = this.getDeviceAddress(postalAddresses);
		}
	}

	getDeviceNumber(phoneNumbers) {
		return isArrEmpty(phoneNumbers) ? '' : phoneNumbers[0].number;
	}

	getDeviceEmail(emailAddresses) {
		return isArrEmpty(emailAddresses) ? '' : emailAddresses[0].email;
	}

	getDeviceAddress(postalAddresses) {
		return isArrEmpty(postalAddresses)
			? ''
			: cleanLineBreaks(postalAddresses[0].formattedAddress);
	}

	getDeviceDOB(birthday) {
		return birthday
			? moment(
					new Date(`${birthday.month}-${birthday.day}-${birthday.year}`)
			  ).format('D MMMM YYYY')
			: '';
	}
}
