import { useState } from "react";

const Form = () => {

    const form = useState({
        name: "",
        resumenP: "",
        health: "",
        PasoAPaso: "",
        imagen: "",
        diets: []
    })
    return(
        <form>
           <div>
            <label>Nombre</label>
           <input type="text" />
           </div>
           <div>
            <label>Resumen del plato</label>
           <input type="text"/>
           </div>
           <div>
            <label>Nivel de comida saludable</label>
           <input type="number" />
           </div>
           <div>
            <label>Paso a Paso</label>
           <input type="text" />
           </div>
           <div>
            <label>Link de la imagen</label>
           <input type="text"/>
           </div>
           <div>
            <label>Tipos de dieta, puedes elegir varias:</label>
           <option />
           <option/>
           <option/>
           </div>
        </form>
    )
}

export default Form;