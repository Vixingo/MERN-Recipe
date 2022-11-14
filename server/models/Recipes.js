import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    recipeYield: String,
    cookTime: String,
    prepTime: String,
    ingredients: [String],
});

const Recipes = new mongoose.model("Recipes", postSchema);

export default Recipes;
