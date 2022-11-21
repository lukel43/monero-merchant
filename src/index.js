const monerojs = require('monero-javascript');

const run = async () => {
  // Daemon working on other nodes but not ours
  let daemon = await monerojs.connectToDaemonRpc(
    uri = "http://mmc.chompe.rs:38081",
    rejectUnauthorize = false
  );
  let height = await daemon.getHeight();
  console.log(height);
  
  
  let walletRpc = new monerojs.MoneroWalletRpc(
    "http://mmc.chompe.rs:38081",
    "test_user",
    "password123"
  );

  await walletRpc.createWallet({
    path: "testwallet",
    password: "password123"
 });
};

run();