import React from 'react';
import './styles/foot.css';
import logo from '../images/IsoKings.svg';


function Foot() {
    return (
        <footer className="page-footer font-small pt-3">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-white">
                            Contáctanos y siguenos en nuestras redes:
                        </h5>
                        <span>
                            <a href="https://www.instagram.com/kingscollegeeduc/" target="_blanc"  className="social-buttons">
                                <i className="fab fa-instagram" /> Kingscollegeeduc
                            </a>
                        </span>
                        <span>
                            <a href="https://www.facebook.com/kingscollegeeduc"  target="_blanc" className="social-buttons">
                                <i className="fab fa-facebook" /> KingsCollege
                            </a>
                        </span>
                        <span>
                            <span href="#" className="social-buttons"  onClick={() => { navigator.clipboard.writeText('7 583 4998'); alert('Teléfono 7 583 4998 copiado en portapapeles') }}>
                                <i className="fas fa-phone-square-alt" /> (7) 583 - 4998
                            </span>
                        </span>
                        <span>
                            <span href="#" className="social-buttons"  onClick={() => { navigator.clipboard.writeText('313 442 6409'); alert('Teléfono 313 442 6409 copiado en portapapeles') }}>
                                <i className="fab fa-whatsapp" /> (313) 442 - 6409
                            </span>
                        </span>
                        <h2 className="text-center text-uppercase mt-3 text-white">
                            <i className="fas fa-search-location" /> Calle 16 #1e-85, Caobos, Cúcuta
                        </h2>
                    </div>
                    <hr className="clearfix w-100 d-md-none" />
                    <div className="col-md-2 my-auto">
                        <img src={logo} alt="Kings College Logo" className="logo2" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-1 text-white">
                © 2020 Copyright: KingsCollege
            </div>
        </footer>
    );
}



export default Foot;