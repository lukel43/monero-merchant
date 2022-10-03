const monerojs = require('monero-javascript');

/* Basic RPC Tests
const run = async () => {
  let daemon = await monerojs.connectToDaemonRpc(
    "http://mmc.chompe.rs:18089"
  );
  let height = await daemon.getHeight();
  console.log("Block height: ", height);
  let feeEstimate = await daemon.getFeeEstimate()
  console.log("Fee Estimate: ", feeEstimate);
  let txsInPool = await daemon.getTxPool();
  console.log("Txns in pool: ", txsInPool);
  walletFull.close(true);
};
*/
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

//run();

