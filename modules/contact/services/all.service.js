const PouchDB = require('pouchdb');
const db = new PouchDB('contacts');

module.exports = async () => {
  try {
    const result = await db.allDocs({ include_docs: true });
    const contacts = result.rows.map(element => {
      return {
        userId: element.doc._id,
        name: element.doc.name,
        email: element.doc.email,
        phones: element.doc.phones
      };
    });
    return Promise.resolve(contacts);
  } catch (err) {
    console.error('@All Contact', { err });
    return Promise.reject(new Error('Failed to get all contacts'));
  }
};
