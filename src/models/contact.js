const { MongoClient, ObjectId } = require('mongodb');

const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB URI
const db = require('../config/db');

let collection;

async function connect() {
    if (!collection) {
        
        collection = db.getDb().collection('contacts');
    }
    return collection;
}

async function insertContact(contact) {
    const col = await connect();
    // You may want to add validation here
    return col.insertOne(contact);
}

async function findContactByEmail(email) {
    const col = await connect();
    return col.findOne({ email });
}

async function findAllContacts() {
    const col = await connect();
    return col.find({}).toArray();
}

module.exports = {
    insertContact,
    findContactByEmail,
    findAllContacts
};