import CardsHome from "../../CardsHome/CardsHome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";



const Home = () => {
    //cuando se monta que haga el dispatch
    // useEffect()      -useDispatch(); el ciclo de vida que se le pide que haga algo cuando se monte
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(getRecipes());
    },[])
    
    return(
        <>
            <h1>Esta es la vista del Home</h1>
            <CardsHome />
        </>
    )
}

export default Home;