import React from 'react';
import '@styles/ProductInfo.scss';


import close from '@icons/icon_close.png';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <aside className="ProductInfo">
        <div className="ProductInfo-close">
            <img src={close} alt="close"/>
        </div>    
        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="bicicleta"/>
        <div className="ProductInfo">
            <p>L. 1,500.00</p>
            <p>Bicicleta</p>
            <p>Bicicleta estilo montañesa, ideal para realizar senderismo y recorrer grandes distancais</p>
            <button className="primary-button add-to-cart-button">
                <img src={addCart}/>
                Agregar al Carrito
            </button>
        </div>
    </aside>
    );
}

export default ProductInfo;