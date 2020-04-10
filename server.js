const express = require('express');

const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');
const logger = require('./middleware/logger');

const server = express();

server.use(express.json());
server.use('/api/projects', logger,  projectRouter)
server.use('/api/actions', logger, actionRouter)


server.get('/', (req, res) => {
    res.send(`<h2>Sprint Challenge!</h2>`);
  });

module.exports = server;