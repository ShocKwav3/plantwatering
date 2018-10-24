import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
//import routes from './controller';
const app = express();
const port = process.env.PORT || 3001;
var server = require('http').Server(app)
var io = require('socket.io')(server);
var _ = 0
//for logging information
app.use(logger('dev'));

//to make available the body of incoming request for access
app.use(bodyParser.json());

require('./board')(io, _);

//setting up corresponding routes
//app.use('/', routes);

//handle error
app.use((err, req, res, next) => {
  res.send({error: err});
});

const serverVariables = {
  server,
  port,
}

export default serverVariables