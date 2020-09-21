const esClient = require('./client');

esClient.ping({
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('Elasticsearch cluster failed to connect');
  } else {
    console.log('Local elasticsearch is connected!');
  }
});

esClient.cat.count();
console.log(module);
