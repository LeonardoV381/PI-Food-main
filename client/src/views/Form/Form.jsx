import { useEffect, useState } from "react";
import {  getDiets } from "../../redux/actions";
import style from "./Form.module.css"
import { useSelector, useDispatch } from "react-redux";


const Form = (props) => {

    const [ inputs, setInputs ] = useState({  //estado inicial del formulario
        name: "",
        summary: "",
        health: "",
        steps: "",
        image: "",
        newDiets: []
    })

    // const [ dietOptions, setDietOptions ] =useState([]);
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);
    
   

    // const [ errors, setErrors ] = useState({
    //     name: "",
    //     summary: "",
    //     health: "",
    //     steps: "",
    //     image: "",
    //     diets: []
    // })

    const onChangeHandler = (event)=> {
        const owner = event.target.name;
        const value = event.target.value;
       
       
        console.log(event.target.value);
        console.log(event.target.name);
        

        setInputs({ ...inputs, [owner] : value,
        //                         newDiets: setDietOptions
        })
        

    }



    useEffect(() =>{
       dispatch(getDiets())
    }, [dispatch]);


    // useEffect(() =>{
    //     setInputs({
    //         ...inputs, newDiets: dietOptions,
    //     })
    // },[])

    const handleSubmit = (event) => {
        event.preventDefault()

        props.createRecipe(inputs);
        setInputs({
            title: "",
            summary: "",
            score: "",
            healthScore: "",
            image: "",
            steps: "",
            diets: [],
        })

    }
   

    return(
        <form className={style.fName} onSubmit={handleSubmit}>
           <div>
            <label>Nombre</label>
           <input type="text" value={inputs.name} onChange={ onChangeHandler } name="name" />
           </div>
           <div>
            <label>Recipe's Summary</label>
           <input type="text" value={inputs.summary} onChange={ onChangeHandler } name="summary"/>
           </div>
           <div>
            <label>Health Score</label>
           <input type="number" value={inputs.health} onChange={ onChangeHandler } name="health"/>
           </div>
           <div>
            <label>Steps</label>
           <input type="text" value={inputs.steps} onChange={ onChangeHandler }  name="steps"/>
           </div>
           <div>
            <label>Link de la imagen</label>
           <input type="text" value={inputs.image} onChange={ onChangeHandler } name="image"/>
           </div>
           <div>
          <label>Diet Types (you can to choose many)</label>
            <select multiple onChange={ onChangeHandler } value={inputs.diets}>
               
           </select>
           <button type='submit'>Send New Recipe</button>


           </div>
        </form>
    )
}



export default Form;