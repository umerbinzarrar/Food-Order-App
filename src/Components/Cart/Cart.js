import classes from './Cart.module.css';
import Modal from '../UI/Modal';

function Cart(props) {

    return(

        <Modal>
            Cart
            <div className= {classes.total}>
                <span>oal Amoun</span>
                <span>35.99</span>
            </div>
            <div className= {classes.actions} >
                <button className= {classes['button--alt']} >Close</button>
                <button className= {classes.button} >Order</button>
            </div>
        </Modal>
    );
    
}

export default Cart;