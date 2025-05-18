import React, {Fragment} from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";


function Header() {
    return(
        <Fragment>
            <header className= {classes.header} >
                <h1>React-Food</h1>
                <HeaderButton></HeaderButton>
            </header>
            <div className= {classes['main-image']}>
                <img src= {mealsImage} alt="table full of food"></img>
            </div>
        </Fragment>
    );
}

export default Header;