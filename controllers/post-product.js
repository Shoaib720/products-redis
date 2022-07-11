export function makePostProduct({ addProduct }){
    return async function postProduct(httpRequest){
        try {
            const productInfo = httpRequest.body;
            const added = await addProduct(productInfo);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: added
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