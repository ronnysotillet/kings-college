

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/buttombar2.css';

class Menu extends Component {

    render() {
        return (
            <div className="collapse menuDesp" id="collapseExample" >
                <Link to='/' className="buttomBar2" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="icon2 fas fa-home" /> Inicio
                </Link>
                <Link to='/join' className="buttomBar2" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="icon2 fas fa-users" /> Únete
                </Link>
                <Link to='/us' className="buttomBar2" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="icon2 fas fa-school" /> ¿Quienes Somos?
                </Link>
                <Link to='/gallery' className="buttomBar2" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="icon2 fas fa-images" /> Galeria de Fotos
                </Link>
                <Link to='/contactus' className="buttomBar2" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="icon2 fas fa-question" /> ¿Preguntas?
                </Link>
            </div>
        );
    }
}

export default Menu;