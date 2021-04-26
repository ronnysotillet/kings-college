import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './styles/contactus.css';

class ContactUs extends Component {

    render() {
        return (
            <div className="container card cont-pf mt-3 mb-3">
                <div className="row justify-content-md-center">
                    <div className="col-md-8 pt-5 pb-5">
                        <Collapsible trigger="¿Cuando son las matrículas?">
                            <p>¡Matrículas abiertas 2021,  desde el 1 de diciembre hasta el 30 de enero  y durante todo el año escolar 2021,  para nuestros programas de Educación presencial y con alternancia.</p>
                            <p> En King's College transformamos el sentido de la educación, acompañándote desde la virtualidad y ahora con la presencialidad y desde la alternancia.</p>
                        </Collapsible>
                        <Collapsible trigger="¿Qué caracteriza la enseñanza de King’s College?">
                            <p>En nuestro centro educativo King´s College manejamos el Pensamiento visible como base importante para desarrollar nuestra labor educativa, por medio de proyectos de investigación y desarrollo didáctico que fortalezca el desarrollo de las inteligencias múltiples de los niños, buscando potenciar en los niños y niñas el poder de aprender a pensar y a razonar por medio de rutinas de pensamiento en las que hacen conexiones, observaciones, reflexiones generando preguntas para ser respondidas por ellos mismos de manera individual y a su propio ritmo.</p>
                            <p>Creamos actividades que ayuden a generar ideas creativas, desarrollar su lenguaje y pensamiento crítico, por medio de la formación de buenos hábitos que inician desde temprana edad; a través de juegos, rutinas de pensamiento, actividades sensoriales, lingüísticas, artísticas y experimentales.</p>
                        </Collapsible>
                        <Collapsible trigger="¿A que edad puede ingresar mi hijo a King’s College?">
                            <p>En nuestro centro educativo contamos con las instalaciones adecuadas para tus niños desde los 12 meses de edad hasta los 5 años, con espacios para estimulación, actividades académicas, deportivas, lúdicas y exploratorias; con un personal adecuado y constantemente capacitado.</p>
                        </Collapsible>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;