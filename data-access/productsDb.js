export default function makeProductsDB(makeDB){

    return Object.freeze({
        findById,
        findByHash,
        insert
    })

    async function findById({ id: _id }){
        const db = await makeDB();
        const result = await db.collection('products').find({ _id });
        const found = await result.toArray();
        if(found.length === 0){
            return null
        }
        const { _id: id, ...info } = result;
        return { id, ...info };
    }

    async function findByHash(hash) {
        const db = await makeDB();
        const result = await db.collection('products').find({ hash });
        const found = await result.toArray();
        if(found.length === 0){
            return null
        }
        return found;
    }

    async function insert (product){
        const db = await makeDB();
        const result = await db.collection('products').insertOne(product);
        return result;
    }
}