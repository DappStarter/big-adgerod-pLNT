require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender security edit razor situate uncle coral light army gentle'; 
let testAccounts = [
"0xb9a8118b77cf1eb55ca2ffca617278df9277224d27cb03593159ce591ea7ae57",
"0x030400e4c26a189f1a0a902e0cb4ae93885acf443120697d9d74f26640382c2f",
"0x23b111268d19b3271f85019e3783ed0daf07ebccf8425c3c4bfcbdd61b35cc94",
"0xf9d46a1cfc4549114df2b110228efb8f34f8f931bf7b8fe8a1c3ef4c7b7595b5",
"0xc8fd644ca42a254d789e2e52b72c19c7cad346962cbeb85b5c5a51cdb9b9b832",
"0xde2cf4dd7ed8714182c2c49ab6d424ac7b0faad7aa508c005f5519a2f7c0228b",
"0x1c11c76342335e65216a23bf2d1e90039a852dfac69a6ef6d4d9f7a1e08da4fd",
"0xc53b1261846d075f9b7cb2a0ec7dbd687774cba99ced65b910654ea32aa4cec1",
"0x51dc3b786a7154420adaf6764419ce13b9ce10ae81f16d7e8e335e04c3c7880b",
"0x975b570031b8f9c74ad628d2bfd33ce7d8be6ea7cff06753d9f0c47ec3182cf9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

