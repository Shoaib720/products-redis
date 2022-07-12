export default function makeProductsDB(makeDB){

    return Object.freeze({
        findById,
        findByHash,
        findAll,
        insert
    })

    async function findById(id){
        const db = await makeDB();
        const result = await db.collection('products').find({ id });
        const found = await result.toArray();
        if(found.length === 0){
            throw new Error('Product not found!')
        }
        return found;
    }

    async function findAll(){
        const db = await makeDB();
        const result = await db.collection('products').find();
        const found = await result.toArray();
        if(found.length === 0){
            throw new Error('Products not found!')
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