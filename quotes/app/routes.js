module.exports = function(app) {

	var mongoose = require('mongoose');
	var Quote      = require('./models/Car');
	var db       = require('../config/db');

 // Get one quote
/* app.get('/cars/:car_id', function(req, res) {
				res.send(req.params.car_id);

	});*/

	// Get all cars
    app.get('/index', function(req, res) {
        if(mongoose.connection.readyState != 1) {
            mongoose.connect(db.url);
        }
        mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

        Quote.find({}, function(err, quotes) {
            if (err) {
                throw err;
            }
            return res.render('index', {quotes: quotes});
        });
    });

    //get quote details
    app.get('/cars/:car_id',function(req,res) {
        if(mongoose.connection.readyState != 1){
            mongoose.connect(db.url);
        }
        mongoose.connection.on('error', console.error.bind(console, 'mongoDb connection error:'));
        Quote.find({_id: req.params.car_id}, function(err,quotes) {
            if(err) {
                throw err;
            }
            //find and returns an array of collection
            return res.render('quote', {quote: quotes[0]});
        });
    });
    // add new quote
    app.get('/add', function(req, res) {
        res.render('add');
    })

 // Save new quote
	app.post('/cars', function(req, res) {

	});
};
