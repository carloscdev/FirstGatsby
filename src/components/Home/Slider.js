import React from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default class extends React.Component {
    render() {
    return (
    <div className="Carrusel">
      <Carousel className="Carrusel___contenedor"
        renderCenterLeftControls = { ({ previousSlide }) => (
            < button className="Carrusel__boton"  onClick = { previousSlide } > <FontAwesomeIcon icon={faAngleLeft} /> </ button >
          ) } 
          renderCenterRightControls = { ({ nextSlide }) => (
            < button className="Carrusel__boton"  onClick = { nextSlide } > <FontAwesomeIcon icon={faAngleRight} /> </ button >
          ) }
      >
        <img src="https://images.ctfassets.net/vkdbses00qqt/3dbrYRKlvRL0lWs7vVskfG/12017eeb3894bcbf990435abf857f30d/homepage.jpg"  alt="Primer Slider" />
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--luEnx2R7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://on.ahmda.ws/6024d9/c" alt="Segundo Slider" />
        <img src="https://blog.hashinteractive.com/wp-content/uploads/2020/05/gatsby-strapi-authentication-1.jpg" alt="Tercer Slider" />
      </Carousel>
    </div>
    );
  }
}