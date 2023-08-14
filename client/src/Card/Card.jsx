import style from "./Card.module.css"


const Card = (props) => {
    
    return(
        <div key={props.name} className={style.container}>
            
            <img className={style.imgP} src={props.image} alt="not available" ></img>
            <p className={style.name}>Recipe Name:<br/> <br/> {props.name}</p>
            <p className={style.diets}>Diet Type:<br/></p>
            <ul className={style.dietC}>
                {props.diets.map((diet, index) => ( //mapeo al arreglo diets para presentar modo lista
                    <li key={index}> {diet} </li>
                ))}
            </ul>
        </div>
    )
}

export default Card;