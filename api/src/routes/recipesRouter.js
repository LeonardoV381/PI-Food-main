const { Router }  = require("express");
const { 
    getRecipesHandler,
    getRecipeHandlerById,
    createRecipeHandler
    }  = require("../handlers/recipesHandler"); 

const recipesRouter = Router();


recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:idRecipe", getRecipeHandlerById);
recipesRouter.post("/", createRecipeHandler);






module.exports = recipesRouter;
