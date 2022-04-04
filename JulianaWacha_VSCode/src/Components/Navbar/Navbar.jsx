import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Foto from '../../assets/img/logo.jpg'
/* Parar aqui*/
export default () => {
    return (
        <nav>
            <div className="nav-container">
                <img src={Foto} alt="Cards de Fotos" />
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="./Destinos">Destinos</a></li>
                    <li><a href="./Cadastro">Cadastro</a></li>
                    <li><a href="./Contatos">Fale Conosco</a></li>
                </ul>
            </div>
        </nav>
    );
}