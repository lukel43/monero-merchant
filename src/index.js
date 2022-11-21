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
    "test_user",
    "stagenet"
  );

  let walletFull = await monerojs.createWalletFull({
    path: "sample_wallet_full",
    password: "password123",
    networkType: "stagenet",
    serverUri: "http://mmc.chompe.rs:38081",
  });
};

run();