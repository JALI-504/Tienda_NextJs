import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';

const Checkout = () => {
    return (
        <div className="Checkout">
        <div className="Checkout-container">

            <h1 className="titulo">Mi Orden</h1>
           
            <div className="Checkout-content">
                <div className="order">
                    <p>
                        <span>11/05/2022</span>
                        <span>6 articulos</span>
                    </p>
                    <p>L. 9,000.00</p>
                </div>
            </div> 
            <OrderItem />      
        </div>
    </div>
    );
}

export default Checkout;