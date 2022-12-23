import React from 'react';
import '@styles/Newpass.scss';

import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
    return (
        <div className="NewPassword">
        <div className="NewPassword-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title">Crea una nueva contraseña:</h1>
            <p className="subtitle">Introduce una contrasela para tu cuenta</p>
            <form action="/" className="form">
                <label for="password" className="label">Contraseña</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <label for="new-password" className="label">Nueva Contraseña</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password"/>        
                <input type="button" value="Confirmar" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    );
}

export default NewPassword;