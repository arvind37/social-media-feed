const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'alter-office-prakhar-master',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

