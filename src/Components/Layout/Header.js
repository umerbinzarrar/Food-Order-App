import React, {Fragment} from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';


function Header() {
    return(
        <Fragment>
            <header className= {classes.header} >
                <h1>React-Food</h1>
                <button>Cart</button>
            </header>
            <div className= {classes['main-image']}>
                <img src= {mealsImage} alt="table full of food"></img>
            </div>
        </Fragment>
    );
}

export default Header;