var moneroWallet = require('monero-nodejs');
var hostName = 'node.sethforprivacy.com';
var port = 18089;
var Wallet = new moneroWallet(hostName, port);

// examples

Wallet.balance().then(function(balance) {
    console.log(balance);
});