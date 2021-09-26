import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;

    for (const book of cart) {
        total = total + book.price;

    }
    return (
        <div className="cart">
            <h2>Books Added: {cart.length}</h2>
            <h4>Total Cost: {total.toFixed(2)}</h4>


        </div>
    );
};

export default Cart;