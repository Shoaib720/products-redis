export function makeGetProduct(fetchProduct){
    return async function getProduct(httpRequest){
        try {
            const productId = httpRequest.params.id;
            const product = await fetchProduct(productId);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: product
            }
        } catch (error) {
            console.error(error);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: error.message
            }
        }
    }
}