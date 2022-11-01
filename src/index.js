const monerojs = require('monero-javascript');

const run = async () => {
  let daemon = await monerojs.connectToDaemonRpc(
    "http://mmc.chompe.rs:18080"
  );
  let height = await daemon.getHeight();
  console.log(height);
};

run();