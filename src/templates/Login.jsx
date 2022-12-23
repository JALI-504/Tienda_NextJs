import React, { useRef } from 'react';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password'),
        }    
        console.log(data);   
    }

    return (
        <div className="Login">
        <div className="Login-container">
            <img src={logo} alt="logo" className="logo"/>
            <form action="/" className="form" ref={form}>
                <label for="email" className="label">
                    Direccion de Email
                    </label>
                <input type="text" name="email" placeholder="Ingrese su correo electrónico" class="input input-email"/>
                <label for="password" className="label">
                    Contraseña
                </label>
                <input type="password" name="password" placeholder="*********" class="input input-password"/>               
                <button type='submit' className="primary-button Login-button" onClick={handleSubmit}>
                    Log In
                </button>
                <a href="/">
                    ¿No recuerdo mi contraseña?
                </a>
            </form>
            <button className="secondary-button signup-button">
                Sign Up
                </button>
        </div>
    </div>
    );
}

export default Login;