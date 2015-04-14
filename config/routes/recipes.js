var express = require('express');
var router = express.Router();


/* GET Recipe page. */


module.exports = function(db){
	var controller = require('../../app/controller/recipes')(db);

	router.get('/', controller.index);
	router.get('/new', controller.newPage)
	router.post('/', controller.create)
	
	return router;
}