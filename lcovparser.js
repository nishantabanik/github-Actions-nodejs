var parse = require('lcov-parse');

parse('./coverage/lcov.info', function(err, data) {
    //process the data here
    console.log(JSON.stringify(data,null,2))
});