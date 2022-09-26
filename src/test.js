var moneroWallet = require('monero-nodejs');
var hostName = 'mmc.chompe.rs';
var port = 18089;
var Wallet = new moneroWallet('mmc.chompe.rs', 18080);

// var testWallet = Wallet.create_wallet('test_js_wallet', 'test', 'English');

/*
Wallet.create_wallet('test_js_wallet', 'test', 'English').then(function(result){
    console.log(result);
});
*/

var height = Wallet.height();
console.log(height);