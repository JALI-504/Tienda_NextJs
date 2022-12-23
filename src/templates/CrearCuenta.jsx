import React from 'react';
import '@styles/CrearCuenta.scss';

const CreateAccount  = () => {
    return (
        <div className="login">
        <div className="CreateAccount-container">
          
            <h1 className="title">Mi Cuenta:</h1>

            <form action="/" className="form">
                
                <div >
                    <label for="name" className="label">Nombre: </label>
                <input type="text" id="name" placeholder="Escriba su nombre." className="input input-name"/>

                <label for="email" className="label">Email: </label>
                 <input type="text" id="email" placeholder="Escriba su correo electronico." className="input input-email"/>
                 <label for="password" className="label">Contraseña: </label>
                 <input type="password" id="password" placeholder="Escriba su contraseña." className="input input-password"/>
                </div>
                
                <input type="submit" value="Crear" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    );
}

export default CreateAccount;