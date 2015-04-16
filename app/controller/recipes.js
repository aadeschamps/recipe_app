
module.exports = function(db) {
	var Recipes = db.models.Recipe;
	var Ingredient = db.models.Ingredient;

	return {
		index: function(req, res, next){
			Recipes.find({created_by: 1})
				.populate('ingredients')
				.exec(function(err, recipes){
					res.send(recipes);
				})



			// 	function(err, recipes){
			// 	res.send(recipes[recipes.length-1].populate('ingredients'));
			// })
				// Ingredient.findOne()
				// 	.populate('_recipe')
				// 	.exec(function(err, story){
				// 		res.send(story);
				// 	})
		},

		newPage: function(req, res, next){
			res.render('recipe/new', {title: 'New'});
		},

		create: function(req, res, next){
			Recipes.create({name: req.body.name, created_by: 1},function(err, rec){
				//if(err){throw err}
				// console.log(rec._id)
				Ingredient.create({name: "apples", amount: "1", _recipe: rec._id}, function(err, ing){
					if(err){console.log(err)}
					console.log(ing);
					rec.ingredients.push(ing);
					rec.save(function(err){
						res.redirect('/recipes');
					});
				})
			});
			
		}
	}
}