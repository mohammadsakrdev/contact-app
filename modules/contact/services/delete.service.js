const PouchDB = require('pouchdb');
const db = new PouchDB('contacts');

module.exports = async id => {
  try {
    console.log('@Delete', id);
    const doc = await db.get(id);
    const response = await db.remove(doc);
    return Promise.resolve();
  } catch (err) {
    console.log(err);
    return Promise.resolve(new Error('Failed to delete contact'));
  }
};
