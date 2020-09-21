const esClient = require('./client');
const searchDoc = async function(indexName, payload){
  return await esClient.search({
      index: indexName,
      body: payload
  });
}

function getCount() {
  console.log('Connecting to es client');
  return esClient.cat.count();
}

const getLamont = async () => {
  const body = {
    query: {
        match: {
            "City": "Lamont"
        }
    }
  }
  return await searchDoc('zipcode', body)
}

module.exports = {
  getCount,
  getLamont
};