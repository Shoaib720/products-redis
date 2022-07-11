// import crypto from 'crypto';

// const hash = crypto.createHash('sha256').update("hello").digest('hex');

// console.log(hash);

// import sha256 from "crypto-js/sha256.js";

// console.log(sha256('hello1').toString());

import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MONGO_URL);