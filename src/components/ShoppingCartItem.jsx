import React from 'react';
import "@styles/ShoppingCartItem.scss";

const ShoppingCartItem = () => {
    return (
        <div className="ShoppingCartItem">
        <figure>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="bicicleta"/>
        </figure>
        <p>Bicicleta</p>
        <p>L. 1,500.00</p>
    </div>
    );
}

export default ShoppingCartItem;