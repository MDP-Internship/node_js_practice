var fs = require('fs'); 

fs.exists('/usr/local/bin', function(exists,stat) {
console.log('exists:', exists);
});

fs.exists('/xxx', function(err,stat) {
console.log(err);


});