import React from 'react';
import styles from '@styles/Menu.module.scss'

const Menu = () => {
    return (
        <div className={styles.Menu}>
        <ul>
            <li>
                <a href="/" className="titulo">Mis Ordenes</a>
            </li>
            <li>
                <a href="/" className="titulo">Mi Cuenta</a>
            </li>
            <li>
                <a href="/" className="titulo">Sign Out</a>
            </li>
        </ul>
    </div>        
    );
}

export default Menu;