const esClient = require('./client');
const csv = require('csv-parser');
const fs = require('fs');
var results = [];

function writeEs(object) {
  esClient.putScript({
    id: 'zipcode_latlong',
    body: object
  });
}

function getZips() {
  fs.createReadStream('zipcode_latlngs.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(`Writing ${results.length} records:`);
        results.slice(0,10).forEach(element => {
          console.log(element);
          writeEs(element);
        });
    });
};

getZips();
