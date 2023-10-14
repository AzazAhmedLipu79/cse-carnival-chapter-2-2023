const crypto = require('crypto');




const hash=(string)=>{

    const hash = crypto.createHash('sha256').update(string).digest('hex');
    return hash;
}

const compare = (hash1,hash2)=>{
    const isMatch = crypto.timingSafeEqual(hash1, hash2);

if (isMatch) {
return true;
} 
return false;
}

module.exports = {hash,compare};