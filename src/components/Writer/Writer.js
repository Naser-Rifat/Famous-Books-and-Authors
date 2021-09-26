import React from 'react';
import './Writer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Writer = (props) => {
    const { name, img, price, occupation, Famous_Book, Birth_Date } = props.writer;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="writer-details">


            <img src={img} alt="" />

            <h4>Writer: <span className="text-normal">{name}</span></h4>
            <h4>Birt Date:<span className="text-normal"> {Birth_Date}</span></h4>
            <h4>Occupation: <span className="text-normal">{occupation}</span></h4>
            <h4>Famous Book: <span className="text-normal">{Famous_Book}</span></h4>
            <h4>Price: ৳ <span className="text-normal">{price}</span></h4>
            <button onClick={() => props.handleAddToCart(props.writer)} className="btn-regular"> {element} Buy Book</button>

        </div>
    );
};

export default Writer;