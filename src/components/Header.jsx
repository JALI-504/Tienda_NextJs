import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import styles from '@styles/Header.module.scss';


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}
    return (
        <nav className={styles.Nav}>
        <img src={menu} alt="menu" className="menu"/>
        <div className="navbar-left">
            <img src={logo} alt="logo" className="nav-logo"/>

            <ul>
                <li>
                    <a href="/">TODO</a>
                </li>
                <li>
                    <a href="/">ROPA</a>
                </li>
                <li>
                    <a href="/">ELECTÓNICA</a>
                </li>
                <li>
                    <a href="/">MUEBLES</a>
                </li>
                <li>
                    <a href="/">JUGUETES</a>
                </li>
                <li>
                    <a href="/">OTROS</a>
                </li>
            </ul>
        </div>

        <div className="navbar-right">
            <ul>
                <li className="navbar-shopping-cart"
                 onClick={handleToggle}>
                    ejemplo@ejemplo.com
                </li>
                <li className="navbar-shopping-cart" 
                onClick= {() => setToggleOrders(!toggleOrders)}>
                    <img src={shoppingCart} alt="shop-card"/>
                {state.cart.length > 0 ? <div>{state.cart.length}</div>: null }
                </li>
            </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
    </nav>
    );
}
export default Header;