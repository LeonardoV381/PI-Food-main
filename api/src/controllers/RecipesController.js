const { Recipe } = require("../db");
const axios = require("axios");
const { apiKey } = process.env;
const { Op } = require('sequelize');


const cleanArray = (arr) =>{
    const clean =  arr.map((elem) => {
        return {
            id: elem.id,
            name: elem.title,
            image: elem.image,
            resumenPlato : elem.summary,
            healthScore : elem.healthScore,
            steps: [...elem.analyzedInstructions],
            diets: elem.diets
        };
    });
    return clean;
};

const createRecipe = async( name, imagen, resumenPlato, nivelSaludable, pasoAPaso) => await Recipe.create({ name, imagen, resumenPlato, nivelSaludable, pasoAPaso});


const getRecipeById = async(idRecipe, origen) =>  {
    
    const recipe = origen === "api" ?
       
      (await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?${apiKey}`)).data
     
    : 
    await Recipe.findByPk(idRecipe); //búsqueda en base de datos por la clave primaria 
    return recipe;
};

//id nombre imagen resumen del plato nivel de comida saludable paso a paso



const getAllRecipes = async (recipe) => {
    //buscar en base de datos y app todas las recetas primeras 100
    const dataBaseRecipes = await Recipe.findAll();

    const apiRecipesAllRaw = 
    (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?${apiKey}&addRecipeInformation=true&number=100`)).data;

        const apiRecipesAll = cleanArray(apiRecipesAllRaw.results);


        result = [...dataBaseRecipes, ...apiRecipesAll]
         return result;
    
};

const searchRecipesByName = async (recipe) => {
    
    const dataBaseRecipes = await Recipe.findAll({ where :{
     [Op.or]: [
     {
      name: {
      [Op.iLike]: `%${recipe.toLowerCase()}%` //obviar mayúsculas o minúsculas en la búsqueda del query
                }
              },
              {
                name: {
                  [Op.like]: `%${recipe}%` //que la búsqueda incluya la palabra de la variable
                }
              }
            ]
          }
        });
       
    const recipesNameRaw = 
    (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&query=${recipe}&${apiKey}&number=100`)).data;


        const recipesName = cleanArray(recipesNameRaw.results);
    
    return [...dataBaseRecipes, ...recipesName];
};



module.exports = { createRecipe, getRecipeById, getAllRecipes, searchRecipesByName }

