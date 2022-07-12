import { v4 as uuidv4, validate } from 'uuid';

const ID = Object.freeze({
    makeID: () => uuidv4(),
    isValidId: (uuid) => validate(uuid)
})

export default ID;