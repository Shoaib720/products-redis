export function buildMakeProduct({ID, hash}) {
    return function makeProduct({id = ID.makeID(), title, price, currency}){
        if(!ID.isValidId(id)) {
            throw new Error('Product must have a valid UUID!');
        }
        if(!title) {
            throw new Error('Product must have an title!');
        }
        if(!price) {
            throw new Error('Product must have an price!');
        }
        if(!currency) {
            throw new Error('Product must have an currency!');
        }
        return Object.freeze({
            getId: () => id,
            getTitle: () => title,
            getPrice: () => price,
            getCurrency: () => currency,
            getHash: () => makeHash()
        })

        function makeHash() {
            return hash(title);
        }
    }
}