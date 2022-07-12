import express from 'express';
import cors from 'cors';
import http from 'http';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
import swaggerUiExpress from 'swagger-ui-express';
import { postProduct, getProduct, getAllProducts } from './controllers/index.js';
import { makeExpressCallback } from './callback/index.js';

const PORT = process.env.PORT || 3000
const SSL_PORT = process.env.SSL_PORT || 3443
const options = {
    swaggerOptions: {
        url: process.env.SWAGGER_YAML_FILE_URL
    }
}
const credentials = {
    key: fs.readFileSync('./sslcert/key.pem'),
    cert: fs.readFileSync('./sslcert/fullchain.pem')
}

const app = express();

app.use(cors())
app.use(express.json());
app.get('/', (_req, res, _next) => {
    res.status(200).send({
        message: "Products service is running..."
    })
});
app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(null, options));
app.get('/api/v1/product/:id', makeExpressCallback(getProduct));
app.post('/api/v1/products', makeExpressCallback(postProduct));
app.get('/api/v1/products', makeExpressCallback(getAllProducts));

http.createServer(app).listen(PORT, () => {
    console.log(`Service started on port ${PORT}`);
});

https.createServer(credentials, app).listen(SSL_PORT, () => {
    console.log(`Service started on port ${SSL_PORT}`);
});