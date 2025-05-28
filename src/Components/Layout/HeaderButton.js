import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
import classes from './HeaderButton.module.css';

function HeaderButton(props) {

const cartCtx = useContext(CartContext);

const cartNumber = cartCtx.items.reduce((currValue,item)=>{
  return currValue + item.amount;
}, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {cartNumber} </span>
    </button>
  );
};

export default HeaderButton; 

