import style from "./Landing.module.css"
import { useHistory } from "react-router-dom";

const Landing = () => {
const history = useHistory();
   
const handleAccess= () =>{
    history.push("/home")
}
    
   
    return(
        <>
            <h1 className={style.title}>WELCOME TO THE FOOD APP</h1>
            <img src="https://media.tenor.com/Zp5eehUrC78AAAAd/mukbang-food.gif" alt="gif intro"/>
            <br/>
            <button className={style.button} onClick={ handleAccess }>ACCESS</button>
        
        </>
    )
}

export default Landing;