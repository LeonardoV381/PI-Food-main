const { Diet } = require("../db");
const { apiKey } = process.env;
const axios = require("axios");


const findAllDiets = async () => {
    console.log("estoy en dietas");
    // let  dataBasediets = await Diet.findAll();
     
     const dataBasediets =  (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?${apiKey}&addRecipeInformation=true&number=100`)).data.results;
  


    // return [...dataBasediets];
     
    
}


module.exports = { findAllDiets };