var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/recipe_test', function(err){
	if(err){
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});

var mongoose = require('./ingredients')(mongoose);
var mongoose = require('./recipes')(mongoose);

module.exports = mongoose;