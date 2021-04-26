import React, { Component } from 'react';
import img1 from '../images/carousel1.jpg';
import img2 from '../images/SorteoKings1.png';
import img3 from '../images/FuegosArtificialesDerecha.svg';
import img4 from '../images/FuegosArtificialesIzquierda.svg';
import img5 from '../images/epaycoInferior.svg';
import './styles/carousel1.css';

class Carousel1 extends Component {

    render() {
        return (
            <div id={this.props.id} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target={"#" + this.props.id} data-slide-to="0" className="active"></li>
                    <li data-target={"#" + this.props.id} data-slide-to="1"></li>
                    <li data-target={"#" + this.props.id} data-slide-to="2"></li>
                    <li data-target={"#" + this.props.id} data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-8 auto-center text-center">
                                <h1>
                                    Matriculas Abiertas 2021
                                </h1>
                                <h4>
                                    ¿Qué esperas para unirte a nuestra familia Kings College?
                                </h4>
                                <p>
                                    Caminadores - Párvulos - Prejardín - Jardín - Transición
                                </p>
                            </div>
                            <img className="col-md-4  img-carousel" src={img1} alt="First slide" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row justify-content-md-center">
                            <img className="col-md-3 img-carousel" src={img2} alt="First slide" />
                            <div className="col-md-6 auto-center text-center">
                                <h1>
                                    ¡Participa en nuestro sorteo!
                                </h1>
                                <h2>
                                    Estamos sorteando dos Huawei Y5 a través de nuestras redes sociales, ¿ Qué esperas para unirte?
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item newyear">
                        <div className="row justify-content-md-center">
                            <img className="col-md-3" src={img3} alt="First slide" />
                            <div className="col-md-6 auto-center text-center">
                                <h1>
                                    Merry Christmas<br/> and Happy New Year
                                </h1>
                                <h4>
                                    Desde Kings's College les deseamos a todos una feliz navidad y un prospero año 2021
                                </h4>
                            </div>
                            <img className="col-md-3" src={img4} alt="First slide" />
                        </div>
                    </div>
                    <div className="carousel-item epayco">
                        <div className="row justify-content-md-center">
                            <div className="col-md-6 auto-center text-center pt-5 pb-5">
                                <h1>
                                    No olvides que ahora contamos con <br />
                                    <img className="pt-2 pb-2" src={img5} alt="First slide" /><br />
                                    para que pagues tu pension.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href={"#" + this.props.id} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={"#" + this.props.id} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel1;