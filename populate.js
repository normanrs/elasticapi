const esClient = require('./client');
const csv = require('csv-parser');
const fs = require('fs');

fs.readFile('zipcode_latlngs.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(await csv(data))
});