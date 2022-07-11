export function makeRedisDB (client) {

    return Object.freeze({
        getValue,
        setValue
    })

    async function getValue(key) {
        await client.connect();
        const value = await client.get(key);
        await client.quit();
        return value;
    }

    async function setValue(key, value) {
        await client.connect();
        console.log("connected redis");
        console.log(key);
        console.log(value);
        const result = await client.set(key, value);
        console.log(result);
        await client.quit();
    }
}