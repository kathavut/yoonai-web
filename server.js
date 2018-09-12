//server.js
/* jslint node: true */
'use strict';
var compression = require('compression');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemcachedStore = require('connect-memcached')(session);
var morgan = require('morgan');
var path = require('path');
var hbs = require('express-handlebars');

// Require configuration file defined in app/Config.js
var config = require('./app/config');

var app = express();
// compress all requests
app.use(compression());
//view engine setup
app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.use(cookieParser());
app.use(session({
    secret: 'appengineFTW',
    key: 'test',
    proxy: 'true',
    store: new MemcachedStore({
        hosts: [process.env.MEMCACHE_URL || config.MEMCACHE_URL[0]]
    })
}));
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// Connect to database
mongoose.connect(config.DB);
// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/views')));
// Use morgan to log request in dev mode
app.use(morgan('dev'));
//app.use(morgan(':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = config.APP_PORT || 4000;
app.listen(port); // Listen on port defined in config file
console.log('App listening on port ' + port);

var apiRoutes = require('./app/routes');
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
app.get('/', function (req, res) {
    res.render('index',{
        title:'ok-hbs',
        msg:'สวัสดีไทยแลนด์',
        view:'yoonai-index',
        _session:JSON.stringify(req.session)
    });
});
app.get('/signup',function(req,res){
    res.render('index',{
        title:'ok-hbs',
        msg:'สวัสดีไทยแลนด์',
        view:'yoonai-signup',
        _session:JSON.stringify(req.session)
    });
});
app.get('/login',function(req,res){
    res.render('index',{
        title:'#login : Yoonai',
        msg:'สวัสดีไทยแลนด์',
        view:'yoonai-login',
        _session:JSON.stringify(req.session)
    });
});