
module.exports = function(mongoose){
	var RecipeSchema = new mongoose.Schema({
		name: String,
		ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
		created_by: Number,
		created_at: {type: Date, default: Date.now}
	})

	mongoose.model('Recipe', RecipeSchema);
	return mongoose;
}