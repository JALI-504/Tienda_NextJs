import React from 'react';
import '@styles/Order.scss';

import arrow from '@icons/flechita.svg';


const Order = () => {
    return (
        <div className="Order">
        <p>
            <span>11/05/2022</span>
            <span>6 articulos</span>
        </p>
        <p>L. 9,000.00</p>
        <img src={arrow} alt="arrow"/>
    </div>
    );
}

export default Order;