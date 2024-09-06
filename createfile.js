var fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('File has been created and saved as welcome.txt');
  }
});

