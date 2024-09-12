import React from 'react'
import "../about/about.css"

const About = ({ setActiveSection }) => {
  const handleLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <section className='about'>
      <div className='about__contenedor'>
        <div>
          <h2 className='about__h2'>Sobre Mi</h2>
          <div className='about__barra '></div>
          <div className='about__barra about__barra--inferior'></div>
        </div>
        <div className='about__person'>
          <h3 className='about__h3'>Herner, Juan Manuel. <span className='about__span'>Desarrollador Fullstack</span></h3>
          <p className='about__p'> Soy un desarrollador de Buenos Aires con especialización en Frontend y experiencia en Backend. He trabajado en migraciones de software a la web y en la optimización de procesos, utilizando tecnologías como React, Node.js y Python. Actualmente, estoy completando una Licenciatura en Sistemas y Economia. Tengo una sólida formación en desarrollo Fullstack y Big Data. Busco nuevas oportunidades para aplicar mis habilidades en proyectos desafiantes y aportar valor a tu equipo.</p>
        </div>
        <div className='about__contenedorInfo'>
          <div className='about__divInfo'>
            <div className='about__info'>
              <p className='about__pInfo'><span className='about__spanInfo'>Ciudad:</span> Grand Bourg</p>
              <p className='about__pInfo about__pInfo--segundo'><span className='about__spanInfo'>Edad: </span>20</p>
            </div>
            <div className='about__info'>
              <p className='about__pInfo'><span className='about__spanInfo'>Linkedin: </span><a className='about__email' href="href='https://www.linkedin.com/in/juan-herner-103a45230/'">Juan Herner</a></p>
              <p className='about__pInfo about__pInfo--segundo'><span className='about__spanInfo'>Email: </span>juanmhdev@gmail.com</p>
            </div>
            <div className='about__info'>
              <p className='about__pInfo'><span className='about__spanInfo'>Celular: </span>+54 11 3937-4067</p>
              <p className='about__pInfo about__pInfo--segundo'><span className='about__spanInfo'>Actividad: </span>Disponible</p>
            </div>
            <a href="../../../public/pdf/cv.pdf" download="cv.pdf"><button className='about__button button'>Descargar CV</button></a>
            <button className='about__button button' onClick={() => handleLinkClick('contact')}>Contrátame</button>
          </div>
          <div></div>
        </div>
        <div className='about__contenedorHistoria'>
          <div className='about__contenedorEducacion'>
            <h3 className="about__categoria" >Educación</h3>
            <div className='about__educacion'>
              <div className='about__centrado'>
                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2022</p>
                  <p className='about__titulo'>Diplomatura en Frontend con Javascript</p>
                  <p>- Html</p>
                  <p>- Css</p>
                  <p>- Metodología BEM</p>
                  <p>- Responsive</p>
                  <p>- Fundamentos e introducción a Javascript</p>
                  <p>- Sintaxis Javascript</p>
                </div>
                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2022</p>
                  <p className='about__titulo'>Diplomatura en Javascript con React</p>
                  <p>- Asincronia</p>
                  <p>- Orientado a Objetos</p>
                  <p>- Módulos</p>
                  <p>- Fundamentos e introducción a React</p>
                  <p>- Componentes, ciclos, estados</p>
                  <p>- Reutilización, Estilización, renderizado y React router</p>
                </div>
                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2023</p>
                  <p className='about__titulo'>Diplomatura en Fullstack con Node.js</p>
                  <p>
                    <p>- Fundamentos e introducción a Node.js</p>
                    <p>- Asincronia y promesas</p>
                    <p>- Bases de datos con SQL</p>
                    <p>- Apis, servidor HTTP, despliegue, escabilidad, autenticación y seguridad</p>
                  </p>
                </div>
                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2023</p>
                  <p className='about__titulo'>Diplomatura en Big data con Python</p>
                  <p>- Fundamentos e introducción a Big data</p>
                  <p>- Manejo y procesamiento de Datos</p>
                  <p>- Almacenamiento y consulta de Datos</p>
                  <p>- Fundamentos e introducción a Python</p>
                </div>

                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2023 - en curso</p>
                  <p className='about__titulo'>Licenciatura en sistemas</p>
                  <p>- Fundamentos e introducción a Python</p>
                  <p>- Lógica y resolucion de problemas en programación</p>
                  <p>- Fundamentos e introducción a Java</p>
                </div>
                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2023 - en curso</p>
                  <p className='about__titulo'>Licenciatura en Economía</p>
                  <p>- Fundamentos e introducción a Economía</p>
                  <p>- Macroeconomía y microeconomía</p>
                  <p>- Escuelas económicas</p>
                </div>

              </div>
            </div>
          </div>

          <div className='about__contenedorEducacion'>
            <h3 className="about__categoria" >Experiencia</h3>
            <div className='about__educacion'>
              <div className='about__centrado'>
                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2022</p>
                  <p className='about__titulo'>Valmec - Desarrollador Web</p>
                  <p>- Migración de software a la web</p>
                  <p>- Analisis inicial (Arquitectura, Lógica de negocio, selección de tecnologias)</p>
                  <p>- Desarrollo Frontend</p>
                  <p>- Desarollo Backend e implementación de API</p>
                </div>
                <div className='about__divDecoration'>
                  <div className='about__line'></div>
                </div>
                <div className='about__divContenido'>
                  <div className='about__circle'></div>
                  <p>2024</p>
                  <p className='about__titulo'>Americasa - Analista Programador</p>
                  <p>- Análisis e involucramiento en procesos existentes</p>
                  <p>- Documentación de Ineficiencias y cuellos de botella</p>
                  <p>- Diseño e implementación de soluciones</p>
                  <p>- Optimización y automatización de tareas</p>
                  <p>- Desarollo con Python y xml en Odoo</p>
                  <p>- Capacitación y soporte en las soluciones implementadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About