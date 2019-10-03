const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
const db = new PouchDB('contacts');

module.exports = async query => {
  try {
    const result = await db.find({
      selector: { ...query },
      fields: ['_id', 'name', 'email', 'phones'],
      sort: ['_id']
    });
    const contacts = result.docs.map(element => {
      return {
        userId: element._id,
        name: element.name,
        email: element.email,
        phones: element.phones
      };
    });
    return Promise.resolve(contacts);
  } catch (err) {
    console.error('@Search Contact', { err });
    return Promise.reject(new Error('Con not apply search'));
  }
};
