
module.exports = {
	index: function(req, res, next){
		res.send({recipes: 'all the recipes'});
		// res.render('recipes', {});
	},

	newPage: function(req, res, next){
		res.render('index', {title: 'New'});
	},

	create: function(req, res, next){
		res.render('index', {title: 'New'});
	}
}