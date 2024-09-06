//create server
var http = require('http');

http.createServer(function(request, response) {
  // Set the response header with a status code of 200 (OK) and content type as text/plain
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response
  response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);

// console will print the message
  console.log('Server running at http://127.0.0.1:3000');
