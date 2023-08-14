import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ( {onSearch} ) => {
    return(
        <div className={style.mainContainer}>
          <ul className={style.list}>
            <li className={style.margin}>
            <NavLink to="/home" className={(isActive) => isActive ? style.isActive : style.activeDisable }> HOME </NavLink>
            </li>
            <li className={style.margin}>
            <NavLink to="/create" className={(isActive) => isActive ? style.isActive : style.activeDisable}> CREATE </NavLink>
            </li>
          </ul>
          <div>
              <SearchBar onSearch={ onSearch } />
          </div>
        </div>
    )
}

export default NavBar; 