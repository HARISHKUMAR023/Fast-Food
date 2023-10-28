

const { MongoClient } = require('mongodb');
let database;

async function connectToDatabase() {
    const uri = 'mongodb+srv://harish:Harish023@atlascluster.hrznqyj.mongodb.net/?retryWrites=true&w=majority';
    const client = await MongoClient.connect(uri);
    database = client.db('test');
}

function getDb() {
    if (!database) {
        throw new Error('You must connect first!');
    }
    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
};
