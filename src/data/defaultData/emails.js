import Data from 'data';

import dataEmails from 'data/json/emails';

const emails = dataEmails
	.map((email) => Data('EMAIL', email))
	.sort((a, b) => b.date - a.date);

export default emails;
