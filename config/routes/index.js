var express = require('express');
var router = express.Router();


/* GET home page. */

module.exports = function(db){
	var index = require('../../app/controller/index')(db);
	
	router.get('/', index.index);

	return router;
};
