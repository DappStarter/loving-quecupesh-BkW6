require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index reward stereo property install lobster fresh speak'; 
let testAccounts = [
"0x9875e5195b1cbff3d2f5d7a1f4a6589c323e9388c8b3cf593ad8d11aff26f3a9",
"0xf049fbbb24937bef1b4da2bed84fe2d5f26867893c5eef5126feb79e8ae707a1",
"0x8b1eac8ca019e38fd12331a94506d3eb0929ce9a0a7e26151397e6d600d44d02",
"0xf8145a5a0973282966b9793c9c7365176913645f4dcdcb230f73505eaf99247a",
"0x1940361851acbd96a124f1ba65115a182bff8a2baec208d1c99b555814147365",
"0x586b189801ff2b2043f5868b852ecc03907ddb968c49aa7a3def31a7f91e5350",
"0x62d905e056af3acd04f6d27eb5b8299fff40b10294d4ed0d66efcd8ae8fedb7f",
"0xf99ce8ebd564c396aa6d9f35271b62d1852c005da68ca7f987ed71c6f83cb55b",
"0x5ddcce0dcdcf30cee1cfd2208b06ebc7ad3bc1fd5ad13021285fef590bcf4f3d",
"0x8fa28e7cae1852c1e42431183e707ad0f135872d5344731c4e66d1ec2dec0ffe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


