/* ANIMACION DEL BANNER */
var desplegado = false;
header__menu.addEventListener("click", e=>{
    if (desplegado === false) {
        header__menu__desplegable.style.display ="flex";
        desplegado = true;
    } else {
        header__menu__desplegable.style.display ="none";
        desplegado = false;
    }
         
})


/* FUNCIONALIDAD DEL ABOUT */
about__profesionalmente.addEventListener("click", e=>{
    about__personalmente.style.color = "var(--tercero)"
    about__profesionalmente.style.color = "var(--secundario__gradiente)"
    about__texto.textContent = "Soy un desarrollador web fullstack, en constante aprendizaje y recientemente iniciado(1 año), principalmente estoy centrado en Javascript y PHP, realice varios cursos y estoy estudiando licenciatura en sistemas, intento afianzar mis conocimentos mediante proyectos y plasmar mi esencia en ellos."
    about__texto.style.animation ="desliz-derecha 3s"
    setTimeout(() => {
        about__texto.style.animation =""
    }, 1000);
})

about__personalmente.addEventListener("click", e=>{
    about__profesionalmente.style.color = "var(--tercero)"
    about__personalmente.style.color = "var(--secundario__gradiente)"
    about__texto.textContent = "Me llamo Herner, Juan Manuel. Tengo 19 años y vivo en Buenos Aires. Siempre tuve una inexplicable pasión por la historia, economia, tecnologia e innovación, convirtiendose la programación en la predominante entre ellas, porque mezclaba 3 factores que siempre ame, la creación, innovación y la computadora. Por cierto, me encantan los videojuegos, sobre todo los de estrategia y los belicos, donde se pueda construir o conquistar..."
    about__texto.style.animation ="desliz-derecha 3s"
    setTimeout(() => {
        about__texto.style.animation =""
    }, 1000);
})


about__habilidades.addEventListener("click", e=>{
    about__habilidades.style.color = "var(--secundario__gradiente)"
    about__educacion.style.color = "var(--tercero)"
    about__certificados.style.color = "var(--tercero)"
    contenido__habilidades.style.display = "block"
    contenido__habilidades.style.animation ="desliz-derecha 3s"
    setTimeout(() => {
        contenido__habilidades.style.animation =""
    }, 1000);
    contenido__educacion.style.display = "none"
    contenido__certificados.style.display = "none"
})
about__educacion.addEventListener("click", e=>{
    about__habilidades.style.color = "var(--tercero)"
    about__certificados.style.color = "var(--tercero)"
    about__educacion.style.color = "var(--secundario__gradiente)"
    contenido__habilidades.style.display = "none"
    contenido__educacion.style.display = "block"
    contenido__educacion.style.animation ="desliz-derecha 3s"
    setTimeout(() => {
        contenido__educacion.style.animation =""
    }, 1000);
    contenido__certificados.style.display = "none"
})
about__certificados.addEventListener("click", e=>{
    about__habilidades.style.color = "var(--tercero)"
    about__certificados.style.color = "var(--secundario__gradiente)"
    about__educacion.style.color = "var(--tercero)"
    contenido__habilidades.style.display = "none"
    contenido__educacion.style.display = "none"
    contenido__certificados.style.display = "block"
    contenido__certificados.style.animation ="desliz-derecha 3s"
    setTimeout(() => {
        contenido__certificados.style.animation =""
    }, 1000);
})

/* PROJECTOS EVENTOS */
var caja__webs = document.querySelectorAll(".caja__webs")
var caja__js = document.querySelectorAll(".caja__js")
var caja__php = document.querySelectorAll(".caja__php")


webs.addEventListener("click",e=>{
    webs.style.borderColor ="var(--secundario)";
    php.style.borderColor ="var(--tercero)";
    js.style.borderColor ="var(--tercero)";

    caja__webs.forEach(elementos__webs => {
        elementos__webs.style.animation ="desliz-derecha 3s"
        setTimeout(() => {
            elementos__webs.style.animation =""
        }, 1000);
        elementos__webs.style.display = "flex"
    });
    caja__js.forEach(elementos__js => {
        elementos__js.style.display = "none"
    });
    caja__php.forEach(elementos__php => {
        elementos__php.style.display = "none"
    });

    project__contenedor__webs.style.display="grid"
})
js.addEventListener("click",e=>{
    webs.style.borderColor ="var(--tercero)";
    php.style.borderColor ="var(--tercero)";
    js.style.borderColor ="var(--secundario)";
    caja__js.forEach(elementos__js => {
        elementos__js.style.display = "flex"
        elementos__js.style.animation ="desliz-derecha 3s"
        setTimeout(() => {
            elementos__js.style.animation =""
        }, 1000);
    });
    project__contenedor__javascript.style.display="grid"
    project__contenedor__webs.style.display="none"
    project__contenedor__php.style.display="none"
})
php.addEventListener("click",e=>{
    webs.style.borderColor ="var(--tercero)";
    php.style.borderColor ="var(--secundario)";
    js.style.borderColor ="var(--tercero)";
    caja__php.forEach(elementos__php => {
        elementos__php.style.display = "flex"
        elementos__php.style.animation ="desliz-derecha 3s"
        setTimeout(() => {
            elementos__php.style.animation =""
        }, 1000);
    });
    project__contenedor__javascript.style.display="none"
    project__contenedor__webs.style.display="none"
    project__contenedor__php.style.display="grid"
})

var ejecuciones = 0
var banner__caja = document.querySelector(".banner__caja")
window.addEventListener("scroll", e=>{
    var scrolled = window.scrollY;
    /* ANIMACION DEL BANNER */
    if (scrolled > 50) {
        
    setInterval(() => {
    ejecuciones++
    if (ejecuciones <= 5) {
        banner__proyectos.textContent = ejecuciones + "+"
    }
    if (ejecuciones <= 20) {
        banner__usuarios.textContent = ejecuciones + "+"
    }
    if (ejecuciones <= 5) {
        banner__certificados.textContent = ejecuciones
    }
    if (ejecuciones <= 1) {
        banner__años.textContent = ejecuciones
    }
}, 150);
        banner__caja.style.animation ="banner 2s"
    }
    console.log(scrolled)
})