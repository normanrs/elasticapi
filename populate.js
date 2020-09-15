const esClient = require('./client');
const csv = require('csv-parser');
const fs = require('fs');
var results = [];

const getZipData = function () {
    return new Promise(function (resolve) {
      fs.createReadStream('zipcode_latlngs.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          console.log(`Stored ${results.length} records:`);
        });
    });
};

const writeToEs = function () {
    return new Promise(function (resolve) {
        console.log(`${results.length} records available`);
        esClient.putScript({
          id: 'zipcode_latlong',
          body: results[0]
        });
    });
};


getZipData().then(function() {
  return writeToEs();
});