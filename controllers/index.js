import { addProduct } from "../use-cases/index.js";
import { makePostProduct } from "./post-product.js";

const postProduct = makePostProduct({ addProduct })

const productController = Object.freeze({
    postProduct
})

export default productController;
export { postProduct }