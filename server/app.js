const express = require('express');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');



const authRoute = require('./routes/auth.js');
const homesRoute = require('./routes/homes.js');

const app = express();

require('dotenv').config({path: './config.env'});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/', authRoute);
app.use('/homes', homesRoute);


//Models
var models = require("./models");
//load passport strategies
require('./config/passport.js')(passport, models.User);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.json(err);
});

module.exports = app;
