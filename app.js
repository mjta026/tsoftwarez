var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    routes = require('./routes/index.js'),

    rutas = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(express.compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*index*/
app.use('/', routes);


app.use('/api', rutas);


app.set('port', process.env.PORT || 80);

app.listen( app.get('port'), function( req, res ) {
  console.log('Express server listening on port ' + app.get('port'));
});

