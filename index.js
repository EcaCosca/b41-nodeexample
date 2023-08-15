const os = require('os')
const http = require('http');
const cowsay = require("cowsay");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(
    cowsay.say({
    text : "We can paly arround with diferent modules and depending on the components we can introduce different func to our servers",
    e : ")))))oO",
    T : "U "
    }));
});

server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});