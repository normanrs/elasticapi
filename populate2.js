// const esClient = require('./client');
const csv = require('csv-parser');
const fs = require('fs');
var results = [];

const getZipData = new Promise((resolve, reject) => {
  setTimeout(() => resolve(
    fs.createReadStream('zipcode_latlngs.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(`Stored ${results.length} records:`);
      })),
    1000)
});

// async function getZipData() {
//   return fs.createReadStream('zipcode_latlngs.csv')
//       .pipe(csv())
//       .on('data', (data) => results.push(data))
//       .on('end', () => {
//         console.log(`Stored ${results.length} records:`);
//       });
// };

async function writeToEs() {
  const zipData = await getZipData;
  // setTimeout(() => {
  //       console.log(`${zipData.length} ES records available`);
  //       console.log(`${JSON.stringify(zipData[0])}`);
  //   }, 500);
  console.log(`${await zipData.length} ES records available`);
  console.log(`${JSON.stringify(await zipData[0])}`);
};

// var parsedResponse = getZipData();
// console.log(parsedResponse);
// writeToEs();
// getZipData();
writeToEs();