import React from "react";
import styles from "./NaviBar.module.css";
import Logo from "./logo-nav.png";
import { NavLink } from 'react-router-dom'



class NaviBar extends React.Component {
    render() {
        return (
            <div className={styles.NaviBar}>
                    <span>
                    <img src={Logo} alt={"Logo"} className={styles.logo}/>
                    </span>
             <div className={styles.NaviBarRight}>
                    <NavLink activeClassName={"active-link"} to="/" className={styles.Dashboard} exact>Dashboard</NavLink>
                    <NavLink activeClassName={"active-link"} to="/RecipeView" className={styles.Przepisy} exact>Przepisy</NavLink>
                    <NavLink activeClassName={"active-link"} to="/Profile" className={styles.Profile}>Profil</NavLink>
                    </div> 
            </div>
        )
    }
}

export default NaviBar;