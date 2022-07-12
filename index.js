import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { postProduct, getProduct, getAllProducts } from './controllers/index.js';
import { makeExpressCallback } from './callback/index.js';



const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.get('/', (_req, res, _next) => {
    res.status(200).send({
        message: "Products service is running..."
    })
});

app.get('/api/v1/product/:id', makeExpressCallback(getProduct));
app.post('/api/v1/products', makeExpressCallback(postProduct));
app.get('/api/v1/products', makeExpressCallback(getAllProducts));

app.listen(PORT, () => {
    console.log(`Service started on port ${PORT}`);
})