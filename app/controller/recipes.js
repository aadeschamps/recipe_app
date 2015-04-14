
module.exports = function(db) {
	var Recipes = db.models.Recipe;

	return {
		index: function(req, res, next){
			Recipes.find({created_by: 1}, function(err, recipes){
				res.send(recipes);
			})
		},

		newPage: function(req, res, next){
			res.render('recipe/new', {title: 'New'});
		},

		create: function(req, res, next){
			Recipes.create({name: req.body.name, created_by: 1},function(err, rec){
				console.log(rec);
			});
			res.redirect('/recipes');
		}
	}
}