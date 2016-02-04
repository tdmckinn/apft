'use strict';

const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config');
const path = require('path');
const app = express();
const api = require('./api/calc');
const bodyParser = require('body-parser');

//const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   publicPath: config.output.publicPath,
//   stats: {
//     colors: true
//   }
// }));

//app.use(require('webpack-hot-middleware')(compiler));

// config
//app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static( path.join(__dirname, '../wwwroot')));

app.use('/api', api);

// routes
app.get('*', (req, res) => {
   res.sendFile('index.html', { root: path.join(__dirname, '../wwwroot/views/home') });
});

const server = app.listen(61292, () => {
  let host = server.address().address;
  let port = server.address().port;
  
  console.log(`Web app listening at http://${host}:${port}`);
});

module.exports = server;
