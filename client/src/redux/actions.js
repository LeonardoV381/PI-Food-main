import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const GET_RECIPE = "GET_RECIPE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";

const URL = "http://localhost:3001";

export const getRecipes = () => {
    return async function(dispatch){
        const apiData = await axios.get(`${URL}/recipes`);
        const recipes = apiData.data;
        dispatch({type: GET_RECIPES, payload: recipes});
    
    };
};

export const getRecipesByName = (recipes) => {
    return async function(dispatch){
        const apiData = await axios.get(`${URL}/recipes?name=${recipes}`);
        const recipe = apiData.data;
        dispatch({ type: GET_RECIPES_BY_NAME, payload: recipe})
    }
}



export const getRecipe = (id)=> {
    return async function (dispatch){
        const apiData = await axios.get(`${URL}/recipes/${id}/information`);
        const recipe = apiData.data;
        dispatch({type: GET_RECIPE, payload: recipe});
    }
}



export const createRecipe = (payload) => {
    return async function (dispatch) {
        try {
            let response = (await axios.post(`${URL}/recipes`, payload));
            return dispatch({
                type: CREATE_RECIPE,
                payload: response.data
            });
        }catch (err){
            console.log(err);
        }
    };

}

export const getDiets = () => {
    return async function (dispatch) {
        try {
            let response = (await axios.get(`${URL}/diets`));
            return dispatch({
                type: GET_DIETS,
                payload: response.data,
            });
        }catch (err) {
            console.log(err.message);
        }
    }
    
}







