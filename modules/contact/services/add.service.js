const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
const db = new PouchDB('contacts');

module.exports = async contact => {
  console.log('@Add Contact', contact);
  const result = await db.find({
    selector: { _id: contact.userId },
    fields: ['_id'],
    sort: ['_id']
  });
  if (result.docs.length > 0) {
    return Promise.reject(new Error('User id should be unique'));
  }
  const doc = {
    _id: contact.userId,
    name: contact.name,
    email: contact.email,
    phones: contact.phones
  };
  db.put(doc);
  return Promise.resolve();
  try {
  } catch (err) {
    console.error('@Add Contact', err);
  }
};
