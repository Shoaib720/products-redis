import { v4 as uuidv4, validate } from 'uuid';

// console.log(uuidv4());

const ID = Object.freeze({
    makeID: () => uuidv4(),
    isValidId: (uuid) => validate(uuid)
})

console.log(validate('6005e119-8e82-4552-8565-96c92898da8f'));

export default ID;