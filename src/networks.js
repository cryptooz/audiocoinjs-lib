// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  audiocoin: {
    messagePrefix: '\x18AudioCoin Signed Message:\n',
	bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x17,
    scriptHash: 0x7d,
    wif: 0x97,
	dustThreshold: 0
	}
}
