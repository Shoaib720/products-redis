import { makeAddProduct } from "./add-product.js";
import { productsDB, redisDb } from "../data-access/index.js";

const addProduct = makeAddProduct(productsDB, redisDb);

export { addProduct }