const { createRecipe, getRecipeById,  getAllRecipes, searchRecipesByName} = require("../controllers/RecipesController");
const Recipe = require("../models/Recipe");




const getRecipesHandler =  async (req, res) => {

    const recipes  = req.query.name;
    try {
        const results = recipes ? await searchRecipesByName(recipes) : await getAllRecipes();
         res.status(200).json(results);
         console.log(results);
    } catch (error) {
        res.status(404).json({error: "No hallado"});
    }
}

const getRecipeHandlerById = async (req, res) => {
    const  idRecipe  = req.params; //toma el valor de la propiedad id
    const origen = isNaN(idRecipe) ? "bdd" : "api"; //evaluación si id es numérico o no "NaN"
    
    try {
        const recipe = await getRecipeById(idRecipe, origen)
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const createRecipeHandler = async (req, res) => {
    try {
    const {  name, summary, health, steps, image, newDiets } = req.body;
    const newRecipe = await  createRecipe(name, summary, health, steps, image, newDiets);
    res.status(200).json({ newRecipe });
   } catch (error) {
    res.status(400).json({ error: error.message });
   }

}

module.exports = {
    getRecipesHandler,
    getRecipeHandlerById,
    createRecipeHandler
}