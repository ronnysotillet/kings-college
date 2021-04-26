import React from 'react';
import './styles/navbar.css';
import logo from '../images/LogoKingsCollege.svg';
import epayco from '../images/epaycoSuperior.svg';
import ButtomBar from './butomBar';
import ButtomMiniBar from './butomMiniBar';
import Menu from './Menu';


function NavBar() {


    return (
        <div>
            <div className="icons">
                <a href="https://kingscollege.epayco.me/recaudo/pagopensiones" target="_blank">
                    <img src={epayco} />
                </a>
                <span>Paga tu pensión aquí con</span>
            </div>
            <div className="navbar navbar-custom">
                <img src={logo} alt="Kings College Logo" className="logo" />
                <div className="container__navbar">
                    <div className="butonExpandNav">
                        <ButtomBar route="/" title="Inicio" classIcon="fas fa-home" />
                        <ButtomBar route="/join" title="Únete" classIcon="fas fa-users" />
                        <ButtomBar route="/us" title="¿Quienes Somos?" classIcon="fas fa-school" />
                        <ButtomBar route="/gallery" title="Galeria de fotos" classIcon="fas fa-images" />
                        <ButtomBar route="/contactus" title="¿Preguntas?" classIcon="fas fa-question" />
                    </div>
                    <div className="butonMinNav">
                        <ButtomMiniBar title="Menú" classIcon="fas fa-bars" />
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
}



export default NavBar;