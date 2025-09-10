const env = require('dotenv').config();
const { MongoClient } = require('mongodb');

let _db;

const initDb = async (callback) => {
    if (_db) {
        console.log('Database is already initialized!');
        return callback();
    }
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('Connected to MongoDB');
    _db = client.db(process.env.MONGODB_NAME);
    return callback();
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}

module.exports = {
    initDb,
    getDb
};