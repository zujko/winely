var express = require('express');
var path = require('path');
var expressLess = require('express-less');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var stormpath = require('express-stormpath');
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/winely';

var routes = require('./routes/index');
var wineroutes = require('./routes/wines');
var producerroutes = require('./routes/producers');
var regionroutes = require('./routes/regions');
var foodroutes = require('./routes/foods');
var searchroutes = require('./routes/search');

var app = express();

app.use(stormpath.init(app, {
  website: true,
  postRegistrationHandler: function (account, req, res, next) {
    console.log('Registered: '+account.email);
    var client = new pg.Client(connectionString);
    client.connect();
    client.query('INSERT INTO users(name, email) VALUES($1, $2)',[account.givenName+' '+account.surname, account.email]);
    client.end(function(err) {
      if (err) throw err;
    });
    next();
  }
}));

//Less CSS setup
app.use('/styles', expressLess(__dirname + '/styles'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(helmet())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/wines/', wineroutes);
app.use('/producers/', producerroutes);
app.use('/regions/', regionroutes);
app.use('/foods/', foodroutes);
app.use('/search/', searchroutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
