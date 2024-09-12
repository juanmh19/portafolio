import React from 'react'
import "../services/services.css"

const Services = () => {
    return (
        <section className='services'>
            <div className='services__contenedor'>
                <h2 className='services__h2'>Servicios</h2>
                <div className='services__barra '></div>
                <div className='services__barra services__barra--inferior'></div>
                <div className='service__contenedorDivs'>
                    <div className='services__divService'>
                        <img src="../../../public/img/color__orange.png" alt="" />
                        <p className='services__category' >Diseño Web</p>
                        <p className='services__p' >Transforma tu visión en una experiencia web atractiva y funcional. Diseño sitios intuitivos y responsivos, combinando estética y usabilidad para destacar tu marca y convertir visitantes en clientes.  </p>
                    </div>
                    <div className='services__divService'>
                        <img src="../../../public/img/code__orange.png" alt="" />
                        <p className='services__category' >Desarrollo Web</p>
                        <p className='services__p' >Desarrollo sitios web rápidos y seguros utilizando tecnologías modernas. Creo soluciones eficientes y escalables, transformando tus ideas en aplicaciones web efectivas que impulsan tu negocio.</p>
                    </div>
                    <div className='services__divService'>
                        <img src="../../../public/img/mining__orange.png" alt="" />
                        <p className='services__category' >Web Scraping</p>
                        <p className='services__p' >Obtén datos valiosos de la web con técnicas avanzadas de web scraping. Proporciono información precisa para análisis y toma de decisiones, facilitando el monitoreo de competencia y la actualización de bases de datos.</p>
                    </div>
                    <div className='services__divService'>
                        <img src="../../../public/img/automatic__orange.png" alt="" />
                        <p className='services__category' >Automatizaciones</p>
                        <p className='services__p' >Optimiza tus procesos mediante soluciones de automatización personalizadas. Reduzco el trabajo manual y mejoro la eficiencia, permitiendo a tu equipo enfocarse en el crecimiento del negocio.</p>
                    </div>
                    <div className='services__divService'>
                        <img src="../../../public/img/phone__orange.png" alt="" />
                        <p className='services__category' >Desarrollo Mobile/Desktop</p>
                        <p className='services__p' >Desarrolla aplicaciones móviles y de escritorio efectivas con una experiencia de usuario excepcional. Creo soluciones intuitivas y escalables para satisfacer las necesidades específicas de tus usuarios.</p>
                    </div>
                    <div className='services__divService'>
                        <img src="../../../public/img/data__orange.png" alt="" />
                        <p className='services__category' >Bases de Datos</p>
                        <p className='services__p' >Gestiona tus datos de manera eficiente con soluciones de bases de datos avanzadas. Ofrezco diseño y optimización para asegurar un almacenamiento seguro y acceso rápido a la información relevante.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services