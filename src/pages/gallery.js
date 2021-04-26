import React, { Component } from 'react';
import ResponsiveGallery from 'react-responsive-gallery';

//images
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/indice.jpg';
import img8 from '../images/test2.jpg';
import img9 from '../images/disfraces1.jpg';
import img10 from '../images/carousel1.jpg';
import './styles/gallery.css';



class Gallery extends Component {



  render() {

    const images = [
      {
        src: img1,
        lightboxTitle: 'Aprendizaje con cuentos',
        lightboxCaption: 'Nuestro personal docente enseña a travéz de la lectura, recreando historias que permiten volar la imaginación, reforzando el hábito lector de una manera lúdica y sencilla.'
      },
      {
        src: img2,
        lightboxTitle: 'Juego y construcción de bloques',
        lightboxCaption: 'Desarrollan y mejoran su visión espacial, pensamiento lógico matemático y estimulación de su agilidad mental.'
      },
      {
        src: img3,
        lightboxTitle: 'Guardianes de la naturaleza',
        lightboxCaption: 'Este proyecto permite que se incentive el amor, cuidado y respeto hacia la naturaleza, explorando y experimentando con el medio ambiente que los rodea.'
      },
      {
        src: img4,
        lightboxTitle: 'Juego al aire libre',
        lightboxCaption: 'Jugar es imprescindible, el juego es una actividad inherente del ser humano, nos permite conocer, explorar, crear, manipular y experimentar'
      },
      {
        src: img5,
        lightboxTitle: "Saint Patrick's Day",
        lightboxCaption: 'La cultura irlandesa llega a nuestro jardín con grandes personajes en búsqueda del gran tesoro que nos regala el final del arco iris de diversiones y grandes monedas de oro de alegría  por medio de manualidades, obras teatrales, desfiles, canciones centrados en nuestra segunda lengua.'
      },
      {
        src: img6,
        lightboxTitle: 'Juego y construcción de bloques',
        lightboxCaption: 'Desarrollan y mejoran su visión espacial, pensamiento lógico matemático y estimulación de su agilidad mental.'
      },
      {
        src: img7,
        lightboxTitle: 'Despedida de nuestros grandes héroes',
        lightboxCaption: 'Felicitaciones a nuestros valientes, hoy es una meta lograda y estamos muy felices por cada uno de ellos,  "Por siempre estarán en nuestros corazones" PROM 2020.'
      },
      {
        src: img8,
        lightboxTitle: 'Actividad sensorial y juego en el arenero',
        lightboxCaption: 'Tiempo lúdico que permite desarrollar habilidades y destrezas en el desarrollo motriz de los niños. -Conocimiento creativo. -Pensamiento lógico'
      },
      {
        src: img9,  
        lightboxTitle: "Saint Patrick's Day",
        lightboxCaption: 'La cultura irlandesa llega a nuestro jardín con grandes personajes en búsqueda del gran tesoro que nos regala el final del arco iris de diversiones y grandes monedas de oro de alegría  por medio de manualidades, obras teatrales, desfiles, canciones centrados en nuestra segunda lengua.'
     
      },
      {
        src: img10,
        lightboxTitle: 'Happy Easter',
        lightboxCaption: 'Esta propuesta educativa se ha desarrollado realizando actividades artísticas, musicales y culturales en diferentes áreas, principalmente en las áreas de inglés, lengua y artística, para dar a conocer y contrastar las diferentes tradiciones y orígenes de las creencias referentes a la Pascua utilizando nuestra lengua materna y el inglés.'
      }
    ];

    const numOfImagesPerRow = { xs: 1, s: 2, m: 3, l: 3, xl: 3, xxl: 3 }

    return (
      <div className="container">
        <div className="row title-gallery font-weight-bold text-uppercase">
          <div className="col-md-12 text-center">
            <i className="fas fa-images" /> Galeria de Fotos
          </div>
        </div>
        <ResponsiveGallery images={images} useLightBox={true} numOfImagesPerRow={numOfImagesPerRow} />
      </div>
    )
  }
}

export default Gallery;