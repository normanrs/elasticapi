const esClient = require('./client');
const searchDoc = async function(indexName, payload){
  return await esClient.search({
      index: indexName,
      body: payload
  });
}

function returnDate() {
  return Date();
};

function getCount() {
  console.log('Connecting to es client');
  return esClient.cat.count();
};

async function getLamont(){
  const body = {
      query: {
          match: {
              "City": "Lamont"
          }
      }
  }
  try {
      const resp = await searchDoc('zipcode', body);
      return resp;
      // console.log(resp);
  } catch (e) {
      console.log(e);
  }
}

module.exports = {
  returnDate,
  getCount,
  getLamont
};