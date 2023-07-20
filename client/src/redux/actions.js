import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";

const URL = "http://localhost:3001";

export const getRecipes = () => {
    return async function(dispatch){
        const apiData = await axios.get
        (`${URL}/recipes`);
        const recipes = apiData.data;
        dispatch({type: GET_RECIPES, payload: recipes});
    
    };
};

export const getRecipe = (id)=> {
    return async function (dispatch){
        const apiData = await axios.get(`${URL}/recipes/${id}`);
        const recipe = apiData.data;
        dispatch({type: GET_RECIPE, payload: recipe});
    }
}






