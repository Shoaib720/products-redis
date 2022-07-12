export function makeFetchAllProducts(productsDB, redisDB){
    return async function fetchAllProducts(){
        const cachedProducts = await redisDB.getValue('all-products');
        if(cachedProducts){
            return JSON.parse(cachedProducts);
        }
        const fetchedProducts = await productsDB.findAll();
        await redisDB.setValue('all-products', JSON.stringify(fetchedProducts));
        return fetchedProducts;
    }
}