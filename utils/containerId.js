const os = require('os');

function getContainerId() {
  const hostname = os.hostname();
  return hostname;
}

module.exports = getContainerId;
