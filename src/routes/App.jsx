import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from '../containers/Layout';
import ProducItem from "../components/ProducItem";
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecuperarPass from '../pages/RecuperarPass';
import EnviarEmail from '../pages/EnviarEmail';
import NewPass from '../pages/NewPass';
import MiCuenta from "../pages/MiCuenta";
import CrearCuenta from "../pages/CrearCuenta";
import Checkout from '../pages/Checkout';
import Order from '../components/Order';
import Orders from '../pages/Orders';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import NotFound from '../pages/NotFound';

import '../styles/global.css';



 const App  = () => {
    const initialState = useInitialState();
     return (
        <AppContext.Provider value={ initialState }>
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recuperarpass" element={<RecuperarPass />} />
                    <Route exact path="/enviaremail" element={<EnviarEmail />} />
                    <Route exact path="/newpass" element={<NewPass />} />
                    <Route exact path="/micuenta" element={<MiCuenta />} />
                    <Route exact path="/crearcuenta" element={<CrearCuenta />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/order" element={<Order />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/producitem" element={<ProducItem />} />
                    <Route path="*" element={<NotFound />} />      
                </Routes>   
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
        

     );
 }

export default App;