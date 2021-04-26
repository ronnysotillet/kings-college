import React, { Component } from 'react';
import './styles/us.css'
import img1 from '../images/img6.jpg';
import img2 from '../images/disfraces1.jpg';


class Us extends Component {

    render() {
        return (
            <div className="container mt-2 mb-2">
                <div className="row">
                    <div className="col-md-8 text-right">
                        <div className="usTitle">¿Quienes Somos?</div>
                        <div className="usDescription">
                            King’s College Nació con el objetivo de... desdeXX XX XXXX estamos
                            comprometidos con ofrecer al la ciudadanía cucuteña  un nuevo tipo de
                            pedagogia acorde con las necesidades que plantea nuestra nueva realidad
                        </div>
                        <div className="usTitle">Nuestra Misión</div>
                        <div className="usDescription">
                            Educar de forma integral , a todos los estudiantes desde los grados
                            caminadores hasta Transición; con estimulación temprana desarrollando
                            todas sus habilidades y potencializando su talentos de forma
                            individual, formando desde pequeños lideres cabales y con valores.
                        </div>
                    </div>
                    <img src={img1} className="col-md-4" />
                </div>
                <div className="row">
                    <img src={img2} className="col-md-4" />
                    <div className="col-md-8">
                        <div className="usTitle">Nuestra Visión</div>
                        <div className="usDescription">
                            En 2025 King’s College contará con una segunda sede para la 
                            formación primaria que permita que los estudiantes del jardín infantil 
                            hagan la transición hacia su formación en educación básica primaria 
                            con nuestros valores, métodos de estudio, y nuestra misión ajustada a 
                            esta etapa estudiantil para la nueva realidad.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Us;