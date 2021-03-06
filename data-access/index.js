import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from "mongodb";
import redis from 'redis';
import makeProductsDB from "./productsDb.js";
import { makeRedisDB } from "./redisDb.js";

const MONGO_URL = process.env.MONGO_URL
const REDIS_URL = process.env.REDIS_URL
const REDIS_CACHE_EXPIRATION_DURATION = process.env.REDIS_CACHE_EXPIRATION_DURATION

const mongoClient = new MongoClient(MONGO_URL);
const redisClient = new redis.createClient({
    url: REDIS_URL
})

const redisConfiguration = {
    expiration: REDIS_CACHE_EXPIRATION_DURATION
}

async function makeDB() {
    await mongoClient.connect();
    return mongoClient.db('practise');
}

const productsDB = makeProductsDB(makeDB, redisClient);
const redisDb = makeRedisDB(redisClient, redisConfiguration)

export {productsDB, redisDb}