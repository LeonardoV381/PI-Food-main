import { useState } from "react";
import style from "./StyleBar.module.css";
import {  useDispatch }  from "react-redux";
import {   getRecipesByName, getRecipe  } from "../../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch();

    // const [ recipes, setRecipes ] = useState("");
    const [ recipes, setRecipes] = useState("");


    const handleChange = (event) => {
        event.preventDefault();
        setRecipes(event.target.value);
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
          dispatch(getRecipesByName(recipes));
        setRecipes("");
    
    }

    return (
        <div>
            <input className={style.barra} type="text" placeholder="SEARCH RECIPE" onChange={(event) => handleChange(event) } />
            <button className={style.button} 
             type="submit"
            onClick={(event) => handleSubmit(event)}>Search</button>
        </div>

    )
}
