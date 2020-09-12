// const esClient = require('./client');
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('zipcode_latlngs.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.slice(0, 5).forEach(row => {
      console.log(row);
    });
    // console.log(results);
  });

// results.forEach(
  
// );
// esClient.putScript({
//   id: 'calculate-score',
//   lang: "painless",
//   body: {
//     script: "Math.log(_score * 2) + params.my_modifier"
//   }
// });