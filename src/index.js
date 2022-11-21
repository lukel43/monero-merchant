const monerojs = require('monero-javascript');

const run = async () => {
  // Daemon working on other nodes but not ours
  let daemon = await monerojs.connectToDaemonRpc(
    uri = "http://mmc.chompe.rs:38081",
    rejectUnauthorize = false
  );
  let height = await daemon.getHeight();
  console.log(height);

  let walletRpc = await monerojs.connectToWalletRpc(
    "http://mmc.chompe.rs:38081",
  );

  //await walletRpc.createWallet({
  //  path: "testwallet",
  //  password: "password123"
  //});
  let wallet = await monerojs.createWalletFull({
    path: "./testwallet2",
    password: "password123",
    networkType: monerojs.MoneroNetworkType.STAGENET,
    server: new monerojs.MoneroRpcConnection("http://mmc.chompe.rs:38081")
  });
};

run();