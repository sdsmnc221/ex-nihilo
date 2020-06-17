import Data from 'data';

import dataSms from 'data/json/sms';

const sms = dataSms
	.map((sms_) => Data('SMS', sms_))
	.sort((a, b) => b.startDate - a.startDate);

export default sms;
