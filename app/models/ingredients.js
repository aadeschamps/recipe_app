
module.exports = function(mongoose){
	var IngredientSchema = new mongoose.Schema({
		name: String,
		amount: String,
		_recipe: {type: String, ref: 'Recipe'},
		created_at: {type: Date, default: Date.now}
	})

	mongoose.model('Ingredient', IngredientSchema);
	return mongoose;
}