const esClient = require('./client');

export const getCount = () => {
  esClient.cat.count();
}

