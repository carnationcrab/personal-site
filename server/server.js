var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var passport = require('./strategies/mongo.localstrategy');
var sessionConfig = require('./modules/session.config');

var db = require('./modules/db.config.js');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

var indexRouter = require('./routes/index.router');
var homeRouter = require('./routes/home.router');
var registerRouter = require('./routes/register.router');
var userRouter = require('./routes/user.router');

app.use('/register', registerRouter);
app.use('/home', homeRouter);
app.use('/user', userRouter);

app.use('/', indexRouter)

app.listen(port, function(){
    console.log('listening on', port);
});