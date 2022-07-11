export function makeFetchProduct(productsDB, redisDB) {
    return async function fetchProduct(productID) {
        const cachedProduct = await redisDB.getValue(productID);
        if(cachedProduct){
            return JSON.parse(cachedProduct);
        }
        const fetchedProduct = await productsDB.findById(productID);
        await redisDB.setValue(productID, JSON.stringify(fetchedProduct));
        return fetchedProduct;
    }
}