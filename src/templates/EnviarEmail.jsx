import React from 'react';
import '@styles/EnviarEmail.scss';

import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail  = () => {
    return (
        <div className="SendEmail ">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo"/>

            <h1 className="title">¡Hemos enviado un mensaje a tu correo electrónico!</h1>
            <p className="subtitle">Por favor, revisa tu bandeja de entrada</p>

            <div className="email-imag">
                <img src={email} alt="email"/>
            </div>

        </div>
        <button className="primary-button login-button">Login</button>

        <p className="resend">
            <span>¿No recibiste nuestro E-mail?</span>
            <a href="/">Reenviar</a>
        </p>
    </div>
    );
}

export default SendEmail;