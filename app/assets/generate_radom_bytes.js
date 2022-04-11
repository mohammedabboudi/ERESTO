const crypto = require('crypto');

let randomBytes = crypto.randomBytes(64).toString('hex');

console.log(randomBytes);