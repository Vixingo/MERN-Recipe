import Recipes from "../models/Recipes.js";

const newRecipes = Recipes;

export const addNewRecipe = async (req, res) => {
    const {
        name,
        description,
        image,
        recipeYield,
        cookTime,
        prepTime,
        ingredients,
    } = req.body;

    try {
        const newRecipe = new newRecipes({
            name: name,
            description: description,
            image: image,
            recipeYield: recipeYield,
            cookTime: cookTime,
            prepTime: prepTime,
            ingredients: ingredients,
        });

        await newRecipe.save();
        res.status(200);
        // .then(() => res.status(200).json({ message: "data added" }))
        // .catch((err) => res.status(500).json({ message: "err" }));

        res.send(req.body);
    } catch (error) {
        res.send({ message: error.message });
    }
};

// export const populate = async (req, res) => {

// };
