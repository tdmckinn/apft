
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config');
const path = require('path');
const app = express();

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

// static

//app.use('/wwwroot',  express.static(path.join(__dirname, '/wwwroot')));
app.use(express.static( path.join(__dirname, '../wwwroot')));

app.use('/api', (req, res) => {
  
});

// routes
app.get('*', (req, res) => {
   res.sendFile('index.html', { root: path.join(__dirname, '../wwwroot/views/home') });
});

var server = app.listen(61292, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Web app listening at http://${host}:${port}`);
});

module.exports = server;
