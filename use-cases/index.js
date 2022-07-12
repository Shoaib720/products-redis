import { makeAddProduct } from "./add-product.js";
import { productsDB, redisDb } from "../data-access/index.js";
import { makeFetchProduct } from "./fetch-product.js";
import { makeFetchAllProducts } from "./fetch-all-products.js";

const addProduct = makeAddProduct(productsDB, redisDb);
const fetchProduct = makeFetchProduct(productsDB, redisDb);
const fetchAllProducts = makeFetchAllProducts(productsDB, redisDb);

export { addProduct, fetchProduct, fetchAllProducts }