const PouchDB = require('pouchdb');
const db = new PouchDB('contacts');

module.exports = async (id, obj) => {
  try {
    console.log(id);
    const doc = await db.get(id);
    const response = await db.put({
      _id: doc._id,
      _rev: doc._rev,
      ...obj
    });
    return Promise.resolve();
  } catch (err) {
    console.log(err);
    return Promise.reject(new Error('Failed to update contact'));
  }
};
