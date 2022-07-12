import { addProduct, fetchAllProducts, fetchProduct } from "../use-cases/index.js";
import { makeGetAllProducts } from "./get-all-products.js";
import { makeGetProduct } from "./get-product.js";
import { makePostProduct } from "./post-product.js";

const postProduct = makePostProduct(addProduct)
const getProduct = makeGetProduct(fetchProduct)
const getAllProducts = makeGetAllProducts(fetchAllProducts);

const productController = Object.freeze({
    getProduct,
    getAllProducts,
    postProduct
})

export default productController;
export { postProduct, getProduct, getAllProducts }