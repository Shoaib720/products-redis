export function makeRedisDB (client, config) {

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
        await client.setEx(key, config.expiration, value);
        await client.quit();
    }
}