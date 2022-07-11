import { addProduct, fetchProduct } from "../use-cases/index.js";
import { makeGetProduct } from "./get-product.js";
import { makePostProduct } from "./post-product.js";

const postProduct = makePostProduct(addProduct)
const getProduct = makeGetProduct(fetchProduct)

const productController = Object.freeze({
    getProduct,
    postProduct
})

export default productController;
export { postProduct, getProduct }