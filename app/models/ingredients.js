
module.exports = function(mongoose){
	var IngredientSchema = new mongoose.Schema({
		name: String,
		created_at: {type: Date, default: Date.now}
	})

	mongoose.model('Ingredient', IngredientSchema);
	return mongoose;
}