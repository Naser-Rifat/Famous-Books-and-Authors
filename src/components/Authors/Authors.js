import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Authors.css'


const Authors = () => {

    const [Authors, setAuthors] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAuthors(data))
    }, [])

    const handleAddToCart = (book) => {
        const newCart = [...cart, book];
        setCart(newCart);
    }
    return (
        <div className="authors-container">
            <div className="writer-container">
                {
                    Authors.map(writer => <Writer
                        key={Authors.id}
                        writer={writer}
                        handleAddToCart={handleAddToCart}

                    ></Writer>)
                }

            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>




        </div >
    );
};

export default Authors;