const monerojs = require('monero-javascript');

const run = async () => {
  // Daemon working on other nodes but not ours
  let daemon = await monerojs.connectToDaemonRpc(
    uri = "http://mmc.chompe.rs:38081",
    rejectUnauthorize = false
  );
  let height = await daemon.getHeight();
  console.log(height);

  //let walletRpc = await monerojs.connectToWalletRpc(
  //  "http://mmc.chompe.rs:38081",
  //);

  //await walletRpc.createWallet({
  //  path: "testwallet",
  //  password: "password123"
  //});
  let wallet = await monerojs.openWalletFull({
    path: "./mining_wallet",
    password: "password123",
    networkType: monerojs.MoneroNetworkType.STAGENET,
    server: new monerojs.MoneroRpcConnection("http://mmc.chompe.rs:38081")
  });

  let balance = await wallet.getBalance();
  let transfers = await wallet.getTransfers();
  //console.log("Wallet: ", wallet);
  console.log("Balance: ", balance);
  console.log("Transfers: ", transfers);

  /* Test sending funds
  let tx = await wallet.createTx({
    accountIndex: 0,  // source account to send funds from
    address: "565MFUjqb9mUhKnppsE5RW5ssAjfniy2UWBFZX6dcfetYj1eEZrZq41bRyh4axRib5eAN91Efz51mbbxydEpvHhN6WRpqga",
    amount: "100000000000" // send 0.1 XMR (denominated in atomic units)
  });
  
  // can confirm with the user
  let fee = tx.getFee();  // "Are you sure you want to send... ?"
  
  // relay the transaction
  let hash = await wallet.relayTx(tx);
  */
};

run();