import { MongoClient } from 'mongodb';

const MONGO_URL = process.env.MONGO_URL

const mongoClient = new MongoClient(MONGO_URL);

export async function connect() {
    try{
        await mongoClient.connect();
        console.log("Connected to databases...");
    }
    catch(err){
        console.error(`Can't connect to database: ${err}`);
    }
}

export async function disconnect() {
    try {
        await mongoClient.close();
        console.log("Database connection closed!");
    }
    catch (err) {
        console.error(`Can't close database connection: ${err}`);
    }
}