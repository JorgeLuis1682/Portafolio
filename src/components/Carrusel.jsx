import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel() {
  const slides = [
    {
      src: 'https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg',
      alt: 'Programador web trabajando',
      message: 'Bienvenido a mi portafolio',
    },
    {
      src: 'https://azulschool.net/wp-content/uploads/2020/07/El-camino-para-ser-un-desarrollador-web-profesional.-1536x864.jpg',
      alt: 'Segundo proyecto',
      message: 'Explora mis habilidades y proyectos',
    },
    {
      src: 'https://enclaveinformatico.com/wp-content/uploads/2020/05/Portada.jpeg',
      alt: 'Tercer proyecto',
      message: 'Conectemos y creemos algo increíble',
    },
  ];

  return (
    <section id="inicio" className="w-full">
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={3000}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              style={{
                height: '500px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <Carousel.Caption>
              <h3 className="text-3xl font-bold text-white drop-shadow-lg">{slide.message}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Carrusel;
