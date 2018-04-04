const express = require('express');
const helmet = require('helmet');

const logger = (req, res, next) => {
  console.log(`requesting ${req.url}`)
  next(); //need this to tell middleware to send request to next handler
  //could even alter url before it gets sent
}

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger);

server.get('/', function (req, res) {
  res.send({ api: 'Running...' });
});

const port = 5000;
server.listen(port, () => console.log('Running on port 5000'));