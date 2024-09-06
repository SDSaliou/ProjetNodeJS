
var fs = require('fs');

fs.readFile('hello.txt', function (err, data) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log('File content:', data);
});

