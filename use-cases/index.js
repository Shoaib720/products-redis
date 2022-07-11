import { makeAddProduct } from "./add-product.js";
import { productsDB, redisDb } from "../data-access/index.js";
import { makeFetchProduct } from "./fetch-product.js";

const addProduct = makeAddProduct(productsDB, redisDb);
const fetchProduct = makeFetchProduct(productsDB, redisDb);

export { addProduct, fetchProduct }