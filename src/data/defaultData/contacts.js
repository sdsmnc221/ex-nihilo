import Data from 'data';

import dataContacts from 'data/json/contacts';

const contacts = dataContacts.map((contact) => Data('CONTACT', contact));

export default contacts;
