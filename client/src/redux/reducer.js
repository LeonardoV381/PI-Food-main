import { GET_RECIPE, GET_RECIPES_BY_NAME, GET_RECIPES, CREATE_RECIPE, GET_DIETS } from "./actions"
     
const initialState={
    
    recipes : [],
    diets : [],

};

const rootReducer = (state = initialState, action) => { 
    switch(action.type){

        case GET_RECIPES:
            return { ...state, recipes: action.payload };

        case GET_RECIPES_BY_NAME:
            return { ...state, recipes: action.payload}

        case GET_RECIPE:
            return { ...state, recipe: action.payload};

        case CREATE_RECIPE:
            return { ...state,  };

        case GET_DIETS:
            return { ...state, diets: action.payload}
        
        

        default:
            return { ...state };
    }
};
 
export default rootReducer;