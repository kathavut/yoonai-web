//server.js
/* jslint node: true */
'use strict';
<<<<<<< HEAD
var compression = require('compression');
=======
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemcachedStore = require('connect-memcached')(session);
var morgan = require('morgan');
var path = require('path');
var hbs = require('express-handlebars');

<<<<<<< HEAD
// Require configuration file defined in app/Config.js
var config = require('./app/config');

var app = express();
// compress all requests
app.use(compression());
//view engine setup
app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('views',path.join(__dirname,'views'));
=======
var app = express();
//view engine setup
app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/public/layouts/'}));
app.set('views',path.join(__dirname,'public'));
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
app.set('view engine','hbs');

app.use(cookieParser());
app.use(session({
    secret: 'appengineFTW',
    key: 'test',
    proxy: 'true',
    store: new MemcachedStore({
<<<<<<< HEAD
        hosts: [process.env.MEMCACHE_URL || config.MEMCACHE_URL[0]]
=======
        hosts: [process.env.MEMCACHE_URL || '127.0.0.1:12321']
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
    })
}));
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
<<<<<<< HEAD
// Connect to database
mongoose.connect(config.DB);
// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/views')));
// Use morgan to log request in dev mode
app.use(morgan('dev'));
//app.use(morgan(':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length]'));
=======
// Require configuration file defined in app/Config.js
var config = require('./app/Config');
// Connect to database
mongoose.connect(config.DB);
// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')));
// Use morgan to log request in dev mode
app.use(morgan('dev'));
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = config.APP_PORT || 4000;
app.listen(port); // Listen on port defined in config file
console.log('App listening on port ' + port);

<<<<<<< HEAD
var apiRoutes = require('./app/routes');
=======
var apiRoutes = require('./app/Routes');
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
//  Use routes defined in Route.js and prefix it with api
app.use('/api', apiRoutes);

app.use(function (req, res, next) {
    if (!req.session.view) req.session.view = 0;
    req.session.view++;
  req.session.lang = "en";
  req.session.urlApi = config.API;
  console.log(req.session);
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', config.HOST_NAME+':' + port);
    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
  next();
});
// Server index.html page when request to the root is made
<<<<<<< HEAD
app.get('/', function (req, res) {
=======
app.get('/', function (req, res, next) {
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
    res.render('index',{
        title:'ok-hbs',
        msg:'สวัสดีไทยแลนด์',
        view:'yoonai-index',
        _session:JSON.stringify(req.session)
    });
});
<<<<<<< HEAD
app.get('/signup',function(req,res){
=======
app.get('/signup',function(req,res,next){
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
    res.render('index',{
        title:'ok-hbs',
        msg:'สวัสดีไทยแลนด์',
        view:'yoonai-signup',
        _session:JSON.stringify(req.session)
    });
});
<<<<<<< HEAD
app.get('/login',function(req,res){
=======
app.get('/login',function(req,res,next){
>>>>>>> 05650b7624ce288a671cfdf34f284b285050d235
    res.render('index',{
        title:'#login : Yoonai',
        msg:'สวัสดีไทยแลนด์',
        view:'yoonai-login',
        _session:JSON.stringify(req.session)
    });
});