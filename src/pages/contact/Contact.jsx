import React, { useState } from 'react';
import "../contact/contact.css";

const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact__contenedor'>
                <div>
                    <h2 className='contact__h2'>Contacto</h2>
                    <div className='contact__barra '></div>
                    <div className='contact__barra contact__barra--inferior'></div>
                </div>
                <div className='contact__div'>
                    <h3 className='contact__h3'>Tenés alguna consulta?</h3>
                    <p className='contact__p'>Estoy a tu servicio</p>
                </div>
                <div className='contact__div contact__contacts'>
                    <div>
                        <img src="../../../public/img/iphone__orange.png" alt="" />
                        <p className='contact__contact'>Whatsapp</p>
                        <p>+54 11 3937-4067</p>
                    </div>
                    <div>
                        <img src="../../../public/img/email__orange.png" alt="" />
                        <p className='contact__contact'>Email</p>
                        <p>juanmhdev@gmail.com</p>
                    </div>
                    <div>
                        <img src="../../../public/img/linkedin__orange.png" alt="" />
                        <p className='contact__contact'>Linkedin</p>
                        <p>Juan Herner</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
