import CartContext from "./cart-context";

function CartProvider(props) {

    const addItems = item =>{};
    const removeItems = id =>{};


    const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItems,
    removeItems: removeItems
    }


    return <CartContext.Provider value = {cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;