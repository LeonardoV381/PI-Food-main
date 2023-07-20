import style from "./Card.module.css"


const Card = (props) => {
    console.log(props)
    return(
        <div key={props.name} className={style.container}>
            
            <img className={style.imgP} src={props.image} ></img>
            <p className={style.nombre}>Recipe Name:<br/> <br/> {props.name}</p>
            <p className={style.diet}>Diet Type:<br/><br/> {props.diets}</p>
        </div>
    )
}

export default Card;