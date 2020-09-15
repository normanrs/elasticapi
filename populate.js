const esClient = require('./client');
const csv = require('csv-parser');
const fs = require('fs');
var results = [];

function getZipData() {
  return new Promise(function (resolve) {
    fs.createReadStream('zipcode_latlngs.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(`Stored ${results.length} records:`);
      });
  });
};

function writeToEs() {
  console.log('Taylor thinks this will be in the middle')
  setTimeout(() => {
        console.log(`${results.length} ES records available`);
        results.slice(0, 100).forEach(element => 
          setTimeout(() => {
            esClient.index({
              index: 'zipcode',
              id: `${results.indexOf(element)}`,
              body: `${JSON.stringify(element)}`
            });
          }, 100)
        );
    }, 500);
};

getZipData();
writeToEs();