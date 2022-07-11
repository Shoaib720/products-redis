import sha256 from 'crypto-js/sha256.js';
import ID from '../id/index.js';
import { buildMakeProduct } from './product.js'

const makeProduct = buildMakeProduct({ ID, hash });

function hash(message) {
    return sha256(message).toString();
}

export default makeProduct;