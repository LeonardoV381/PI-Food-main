const { Diet } = require("../db");
const { apiKey } = process.env;
const axios = require("axios");


const checkIfDietIsEmpty = async () => { //verifica si hay info en el modelo Diet
  try {
     count = await Diet.count();
    return count === 0; // Devuelve true si la tabla Diet está vacía, false si tiene registros.
  } catch (error) {
    console.error('Error al verificar si la tabla Diet está vacía:', error);
    return false;
  }
};



const findAllDiets = async () => {
    const count = await checkIfDietIsEmpty(); 

    // if(count === true){  //si es true modelo Diet está vacío
     const dataBasedietsRaw =  (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?${apiKey}&addRecipeInformation=true&number=100`)).data.results;
      
     





     const getUniqueDiets = (arr) => {
      const uniqueDiets = [];
    
      arr[0].diets.forEach((diet) => {
        if (
          diet === "vegetarian" ||
          diet === "vegan" ||
          diet === "gluten free" 
        
          // buscando dentro de results los tipos de dieta
        ) {
        
            uniqueDiets.push(diet);
          }
      });
    
      return uniqueDiets;
    };
    
    // Obtener las etiquetas dietéticas únicas
    let dietsDataRaw = getUniqueDiets(dataBasedietsRaw);



     const apiledDiets  = []; 
     dataBasedietsRaw.map((elem) =>{ //mapeo al arreglo pusheo a nuevo arreglo 
        apiledDiets.push(elem.diets)
      });
      
       dietsDataRaw = apiledDiets.flat(1);  //deja arreglo simple sin anidamientos
      // const dietsData = [...new Set(dietsDataRaw)]; //delete repeats
      
      const filterUniquePrecise = (arr) => {
        return arr.filter((item, index, self) => {
          return self.indexOf(item) === index;
        });
      };
      
      

      // Utilizar la función de filtro para obtener los elementos únicos
      const dietsData = filterUniquePrecise(dietsDataRaw);
 



     
      await writeDiet(dietsData); //llama a la funcion para escribir las dietas
      
      return dietsData;
    // }
    // else{
      
      return 
    // }

  }
   
  
      const writeDiet = async (dietsData) => {
        await dietsData.map((elem) => {
          Diet.findOrCreate({
            where: {
              name: elem,
            },
          });
        });
      };
      


    



module.exports = { findAllDiets };