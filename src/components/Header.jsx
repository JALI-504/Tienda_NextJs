import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav}>
				<Image src={menu} alt="menu" className={styles.menu} />
				<div className={styles['navbar-left']}>
					<Link href="/">
					<Image src={logo} alt="logo" className={styles['nav-logo']} />
					</Link>
					<ul>
						<li>
							<a href="/">Todo</a>
						</li>
						<li>
							<a href="/">Ropa</a>
						</li>
						<li>
							<a href="/">Electrodomesticos</a>
						</li>
						<li>
							<a href="/">Muebles</a>
						</li>
						<li>
							<a href="/">Juguetes</a>
						</li>
						<li>
							<a href="/">Otros</a>
						</li>
					</ul>
				</div>
				<div className={styles['navbar-right']}>
					<ul>
						<li className={styles['more-clickable-area'], styles['navbar-email'], styles.pointer} onClick={() => toggleMenu()}>
							jali@504.com
						</li>
						<li
							// className={styles.['navbar-shopping-cart']}
							onClick={() => toggleOrder()}
						>
							<Image className={styles['more-clickable-area'], styles.pointer} src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
}

export default Header;
