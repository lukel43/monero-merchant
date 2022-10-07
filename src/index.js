const monerojs = require('monero-javascript');

// Basic RPC Tests
const run = async () => {
  // Connect to daemon RPC
  let daemon = await monerojs.connectToDaemonRpc(
    "http://mmc.chompe.rs:18089"
  );
  
  // Connect to wallet RPC
  /* FAILED
  let walletRpc = new MoneroWalletRpc.connectToWalletRpc(
    "http://mmc.chompe.rs:18089"
  );
  */
  // Grab block height
  let height = await daemon.getHeight();

  // Create keys-only wallet
  let wallet = await monerojs.createWalletFull({
    password: "abc123",
    networkType: "stagenet",
    serverUri: "http://mmc.chompe.rs:18080",
    restoreHeight: height,
 });
  let ans = await wallet.isConnectedToDaemon();
  console.log(ans);
  
  // console.log("Block height: ", height);
  // Grab fee estimate
  let feeEstimate = await daemon.getFeeEstimate()
  // console.log("Fee Estimate: ", feeEstimate);
  // Grab txns in pool
  let txsInPool = await daemon.getTxPool(); 
  // console.log("Txns in pool: " + txsInPool + " \n ========================== \n Txns end");
  
  // Create wallet
  // FAILED TEST
  // let keysOnlyWallet = await monerojs.createWalletKeys({networkType: "testnet", language: "English"});

  await walletRpc.createWalletFull({
    path: "test_wallet",
    password: "password",
    networkType: "testnet",
    serverUri: "http://mmc.chompe.rs:18089",
  });



  // Output wallet attributes
  console.log("Mnemonic phrase: " + await walletKeys.getMnemonic());
  console.log("Address: " + await walletKeys.getAddress(0,0)); // get address of account 0, subaddress 0
  console.log("Spend key: " + await walletKeys.getPrivateSpendKey());
  console.log("View key: " + await walletKeys.getPrivateViewKey());
  walletFull.close(true);
  
};


/* Failed Tests
main();
// Test creating a wallet
const run = async () => {
  let daemon = await monerojs.connectToDaemonRpc(
    "http://mmc.chompe.rs:18089"
  );
}
async function main() {
  let keysOnlyWallet = await monerojs.createWalletKeys({networkType: "stagenet", language: "English"});

  // Output wallet attributes
  console.log("Mnemonic phrase: " + await walletKeys.getMnemonic());
  console.log("Address: " + await walletKeys.getAddress(0,0)); // get address of account 0, subaddress 0
  console.log("Spend key: " + await walletKeys.getPrivateSpendKey());
  console.log("View key: " + await walletKeys.getPrivateViewKey());
}
*/
run();

