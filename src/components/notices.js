import React from 'react';
import './styles/notices.css';


function Notices() {
    return (
        <div className="container mt-3 mb-3">
            <div className="row justify-content-md-center">
                <h1 className="title col-md-10">
                    Últimas Noticias
                </h1>
            </div>
            <div className="row vertical-divider justify-content-md-center">
                <div className="col-md-4 notice">
                    <h2>Participa en nuestro sorteo:</h2>
                    <h5>
                        Estamos Sorteando dos Huawei Y5,
                        ¡que esperas para unirte!,
                        encuentra mas informacion en 
                        nuestras redes, siguenos y no 
                        te pierdas de ningun detalle.
                    </h5>
                    
                </div>
                <hr />
                <div className="col-md-4 notice">
                    <h2>Integramos pagos en linea:</h2>
                    <h5>
                        Ahora contamos con pagos en linea,
                        gracias al convenio adquirido con 
                        la pasarela #1 en colombia "ePayco",
                        sientete seguro y respaldado de pagar
                        la pension por medio de esta plataforma.
                    </h5>
                    
                </div>
                <hr />
                <div className="col-md-4 notice">
                    <h2>Tenemos matriculas abiertas:</h2>
                    <h5>
                        Desde el 1 de diciembre hasta el 30 
                        de enero y durante todo el año escolar 2021,
                        para nuestros programas de Educación presencial
                        y con alternancia.
                    </h5>
                    
                </div>
            </div>
        </div>
    );
}



export default Notices;