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
        await client.setEx(key, config.expiration, value);
        await client.quit();
    }
}