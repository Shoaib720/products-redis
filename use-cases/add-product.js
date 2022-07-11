import makeProduct from "../entities/products/index.js";

export function makeAddProduct(productsDB, redisDB) {
    return async function addProduct(productData) {
        const productBuilder = makeProduct(productData);
        const product = {
            id: productBuilder.getId(),
            title: productBuilder.getTitle(),
            price: productBuilder.getPrice(),
            currency: productBuilder.getCurrency(),
            hash: productBuilder.getHash()
        }
        await redisDB.setValue(product.id, JSON.stringify(product));
        return await productsDB.insert(product);
    }
}