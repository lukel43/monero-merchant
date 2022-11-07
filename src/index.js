const monerojs = require('monero-javascript');

const run = async () => {
  // Daemon working on other nodes but not ours
  let daemon = await monerojs.connectToDaemonRpc(
    uri = "http://mmc.chompe.rs:38081",
    rejectUnauthorize = false
  );
  let height = await daemon.getHeight();
  console.log(height);
  
  /*
  let walletRpc = await monerojs.connectToWalletRpc(
    uri = "http://mmc.chompe.rs:18081",
    networkType = "stagenet"
  );
  */
};



run();