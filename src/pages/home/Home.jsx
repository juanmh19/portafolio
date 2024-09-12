import React from 'react';
import "../home/home.css";

const Home = ({ setActiveSection }) => {
  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className='home'>
      <div className='home__left'>
        <h1 className='home__h1'>Hola, mi nombre es <span className='home__span'>Herner, Juan Manuel</span> <br /> Soy <span className='home__span'>Desarrollador Fullstack</span></h1>
        <p className='home__p'>Antes que programador, busco ser humano. Soy especialista en desarrollo Frontend y Web, con conocimientos y pasión por Backend y Mobile.Abierto a geolocalización en cualquier parte del mundo, toda experiencia nueva es bienvenida. Durante el primer semestre de 2024, trabajé en una constructora estadounidense en Florida, desempeñándome en múltiples roles como desarrollador Odoo y especialista en automatización y optimización de procesos.</p>
        <button className='home__button' onClick={() => handleLinkClick('about')}>Más información</button>
      </div>
      <div className='home__right'>
        <img className='home__img' src="/portafolio/img/yo.jpg" alt="Imagen personal" />
      </div>
    </section>
  );
}

export default Home;
