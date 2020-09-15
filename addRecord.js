const esClient = require('./client');

esClient.index({  
  index: 'zipcode',
  id: '1',
  body: {
    "Zip": "30444",
    "City": "East Point",
    "State": "GA",
    "Latitude": "33.696073",
    "Longitude": "-84.450276",
    "Timezone": "-5",
    "Daylight savings time flag": "1",
    "geopoint": "33.696073"
  }
},function(err,resp,status) {
    console.log(resp);
});