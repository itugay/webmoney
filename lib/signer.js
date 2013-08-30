// Generated by CoffeeScript 1.6.3
var BigNum, DEBUG, HASH_START, HEADER_SIZE, RANDOM_SIZE, Signer, crypto;

crypto = require('crypto');

BigNum = require('bignum');

DEBUG = false;

HEADER_SIZE = 2;

HASH_START = HEADER_SIZE;

RANDOM_SIZE = 40;

Signer = (function() {
  function Signer(key) {
    this.key = key;
  }

  Signer.prototype.digest = function(message) {
    var blob, blobNumber, expNumber, hash, modNumber, signNumber;
    hash = crypto.createHash('md4').update(message).digest();
    blob = new Buffer(HEADER_SIZE + hash.length + RANDOM_SIZE);
    blob.writeUInt16LE(blob.length - HEADER_SIZE, 0);
    hash.copy(blob, HASH_START);
    if (!DEBUG) {
      crypto.randomBytes(RANDOM_SIZE).copy(blob, HASH_START + hash.length);
    } else {
      blob.fill(0, HASH_START + hash.length);
    }
    blobNumber = BigNum.fromBuffer(blob, {
      endian: 'little',
      size: 'auto'
    });
    expNumber = BigNum.fromBuffer(this.key.exponent, {
      endian: 'little',
      size: 'auto'
    });
    modNumber = BigNum.fromBuffer(this.key.modulus, {
      endian: 'little',
      size: 'auto'
    });
    signNumber = blobNumber.powm(expNumber, modNumber);
    return Array.prototype.reverse.call(signNumber.toBuffer({
      endian: 'little',
      size: 2
    })).toString('hex');
  };

  return Signer;

})();

module.exports = Signer;