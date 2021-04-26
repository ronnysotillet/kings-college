import React, { Component } from 'react';
import './styles/join.css';
import file from '../files/FORMULARIO-INSCRIPCION.pdf';

class Join extends Component {

    render() {
        return (
            <div className="container card cont-join mt-3 mb-3 p-5">
                <h1>
                    Instrucciones para diligenciar el Formulario:
                </h1>
                <h3>
                    1. Para descargar el Formulario de Admisión, debes hacer click en el siguiente link:
                </h3>
                <span>
                    <a href={file} target="_blank" className="social-buttons">
                        <i class="fas fa-file-download" /> Descargar Formulario
                     </a>
                </span>
                <h3>
                    2. Debes imprimir y diligenciar manualmente el formulario.
                </h3>
                <h3>
                    3. Posteriormente, debes escanear el formulario y enviarlo al siguiente correo electrónico:
                </h3>
                <span>
                    <div className="social-buttons" onClick={() => { navigator.clipboard.writeText('kingscollege100@gmail.com'); alert('correo kingscollege100@gmail.com copiado en portapapeles') }}>
                        <i class="fas fa-envelope-open-text" /> kingscollege100@gmail.com
                </div>
                </span>
                <h3>
                    4. Te enviaremos respuesta al telefono o al correo electrónico una vez registremos tu solicitud.
                </h3>
            </div>
        )
    }
}

export default Join;