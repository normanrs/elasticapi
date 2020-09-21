const esClient = require('./client');
const searchDoc = async function(indexName, payload){
  return await esClient.search({
      index: indexName,
      body: payload
  });
}

function returnDate() {
  return Date();
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
  const response = await searchDoc('zipcode', body)
  return response
}

module.exports = {
  returnDate,
  getCount,
  getLamont
};