import http from 'http';
import jq from './jq/index'
const server = http.createServer((req, res) => {
  console.log(jq)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

export default server;