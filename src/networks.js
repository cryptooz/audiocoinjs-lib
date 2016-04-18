// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  peercoin: {
    messagePrefix: '\x17PPCoin Signed Message:\n',
    bip32: {
      public: 0x01da950b,  // start with "Ppub..."
      private: 0x01da90d0  // start with "Pprv..."
    },
    pubKeyHash: 0x37,
    scriptHash: 0x75,
    wif: 0xb7,
    dustThreshold: 0  
  }
}
