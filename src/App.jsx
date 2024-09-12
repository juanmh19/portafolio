import { useState, useEffect } from 'react';

import './App.css';
import './index.css';

function App({ setActiveSection }) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const clicked = () => {
    setIsMenuClicked(prev => !prev);
    setIsMenuVisible(prev => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth < 780) {
      setIsMenuVisible(false);
    } else {
      setIsMenuVisible(true);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (section) => {
    if (window.innerWidth < 780) {
      clicked();
    }
    setActiveSection(section);
  };

  return (
    <>
      <header
        id='header'
        className="header"
        style={{
          background: isMenuVisible ? 'var(--gris)' : 'none',
          alignItems: isMenuVisible ? 'center' : 'end',
          justifyContent: isMenuVisible ? 'center' : 'start',
          height: isMenuVisible ? '100vh' : '10vh',
        }}
      >
        <img
          onClick={clicked}
          className='header__menu2'
          src="../../../portafolio/img/menu__orange.png"
          alt="Menu"
        />
        <div
          style={{ display: isMenuVisible ? 'block' : 'none' }}
          id='header__contenedor'
          className='header__contenedor'
        >
          <nav className="header__nav">
            <div className="header__div" onClick={() => handleLinkClick('home')}>
              <div className="header__icon header__icon--home"></div>
              <a className="header__a" href="#">Inicio</a>
            </div>
            <div className="header__div" onClick={() => handleLinkClick('about')}>
              <div className="header__icon header__icon--person"></div>
              <a className="header__a" href="#">Sobre mi</a>
            </div>
            <div className="header__div" onClick={() => handleLinkClick('services')}>
              <div className="header__icon header__icon--list"></div>
              <a className="header__a" href="#">Servicios</a>
            </div>
            <div className="header__div" onClick={() => handleLinkClick('portfolio')}>
              <div className="header__icon header__icon--work"></div>
              <a className="header__a" href="#">Portfolio</a>
            </div>
            <div className="header__div" onClick={() => handleLinkClick('contact')}>
              <div className="header__icon header__icon--chat"></div>
              <a className="header__a" href="#">Contacto</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default App;
