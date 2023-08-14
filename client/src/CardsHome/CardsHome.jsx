//CardsHome se encarga de  tomar un array de recetas y por cada receta (recipe) renderizar un componente Card
import Card from "../Card/Card";
import style from "./CardsHome.module.css"
import { useSelector } from "react-redux";


const CardsHome = () => {
    
const recipes =  useSelector(state=>state.recipes)

    return(
        <div className={style.container}>
            {recipes.map((recipe) => {
                return <Card 
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    diets={recipe.diets}
                />
            })}
        </div>
    )
}
 export default CardsHome;