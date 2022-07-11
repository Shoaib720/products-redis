import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { postProduct } from './controllers/index.js';
import { makeExpressCallback } from './callback/index.js';



const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.get('/', (req, res, _next) => {
    res.status(200).send({
        message: "Products service is running..."
    })
});

app.post('/api/v1/products', makeExpressCallback(postProduct));

app.listen(PORT, () => {
    console.log(`Service started on port ${PORT}`);
})