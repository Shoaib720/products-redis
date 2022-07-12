export function makeGetAllProducts(fetchAllProducts){
    return async function getAllProducts(httpRequest){
        try {
            const products = await fetchAllProducts();
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: products
            }
        } catch (error) {
            console.error(error);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 404,
                body: error.message
            }
        }
    }
}