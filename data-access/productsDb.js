export default function makeProductsDB(makeDB){

    return Object.freeze({
        findById,
        findByHash,
        insert
    })

    async function findById(id){
        const db = await makeDB();
        const result = await db.collection('products').find({ id });
        const found = await result.toArray();
        if(found.length === 0){
            return null
        }
        return found;
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