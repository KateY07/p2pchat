const http = require('node:http');
const fs = require('node:fs');

http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  fs.createReadStream(__dirname + '/index.html').pipe(response);
}).listen(4173, '127.0.0.1', () => {
  console.log('Open http://127.0.0.1:4173/?local=1 in two tabs');
});
