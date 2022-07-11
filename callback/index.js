export function makeExpressCallback(controller){
    // console.log(controller);
    return (req, res) => {
        controller(req)
        .then(httpResponse => {
            if(httpResponse.headers){
                res.set(httpResponse.headers)
            }
            res.status(httpResponse.statusCode).json(httpResponse.body)
        })
        .catch(e => {
            console.error(e);
            res.status(500).json({
                error: 'An unknown error occured!'
            })
        })
    }
}