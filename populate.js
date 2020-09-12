const esClient = require('./client');
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('zipcode_latlngs.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });