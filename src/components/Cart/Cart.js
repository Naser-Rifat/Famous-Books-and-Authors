import React from 'react';
import List from '../List/List';
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
            {
                cart.map(bookList => <List
                    key={cart.id}
                    bookList={bookList}
                ></List>)
            }
        </div>
    );
};

export default Cart;