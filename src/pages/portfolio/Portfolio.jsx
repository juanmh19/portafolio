import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import "../portfolio/portfolio.css";

const Portfolio = () => {
  const [tecnologia, setTecnologia] = useState("");


  const projects = [
    {
      link: "https://github.com/juanmh19/api-nasa",
      imageSrc: "/img/nasa.jpg", // Imágen
      videoSrc: "/img/nasa.mp4", // Video que se mostrará al hacer hover
      title: "Api de la Nasa",
      technologies: [
        { name: "web", icon: "/img/web.png" },
        { name: "python", icon: "/img/python.png" },
        { name: "django", icon: "/img/django.png" },
      ],
    },

    {
      link: "https://github.com/juanmh19/api-nasa",
      imageSrc: "/img/dashboard.jpg", // Imágen
      videoSrc: "/img/dashboard.mp4", // Video que se mostrará al hacer hover
      title: "Dashboard",
      technologies: [
        { name: "web", icon: "/img/web.png" },
        { name: "react", icon: "/img/react.png" },
        { name: "node.js", icon: "/img/nodejs.png" },
      ],
    },

    {
      link: "https://github.com/juanmh19/api-nasa",
      imageSrc: "/img/digital.jpg", // Imágen
      videoSrc: "/img/digital.mp4", // Video que se mostrará al hacer hover
      title: "Emprendimiento",
      technologies: [
        { name: "web", icon: "/img/web.png" },
        { name: "js", icon: "/img/javascript.png" },
      ],
    },
    {
      link: "https://github.com/juanmh19/api-nasa",
      imageSrc: "/img/memotest.jpg", // Imágen
      videoSrc: "/img/memotest.mp4", // Video que se mostrará al hacer hover
      title: "Memotest",
      technologies: [
        { name: "web", icon: "/img/web.png" },
        { name: "js", icon: "/img/javascript.png" },
      ],
    },
    {
      link: "https://github.com/juanmh19/api-nasa",
      imageSrc: "/img/youtube.jpg", // Imágen
      videoSrc: "/img/youtube.mp4", // Video que se mostrará al hacer hover
      title: "YoutubeDownloader",
      technologies: [
        { name: "web", icon: "/img/web.png" },
        { name: "python", icon: "/img/python.png" },
      ],
    },
    {
      link: "https://github.com/juanmh19/api-nasa",
      imageSrc: "/img/flappy.jpg", // Imágen
      videoSrc: "/img/flappy.mp4", // Video que se mostrará al hacer hover
      title: "Flappybird",
      technologies: [
        { name: "web", icon: "/img/web.png" },
        { name: "js", icon: "/img/javascript.png" },
      ],
    },

  ];

  // Filtrar los proyectos en base a la tecnología seleccionada
  const filteredProjects = projects.filter(project => {
    if (!tecnologia) return true;
    return project.technologies.some(tech => tech.name.toLowerCase().includes(tecnologia.toLowerCase()));
  });

  return (
    <section className='portfolio'>
      <div className='portfolio__contenedor'>
        <h2 className='portfolio__h2'>Portfolio</h2>
        <div className='portfolio__barra'></div>
        <div className='portfolio__barra portfolio__barra--inferior'></div>

        <div>
          <h3 className='portfolio__h3'>Mis últimos proyectos:</h3>
          <div className='portfolio__contenedorEspecializaciones'>
            <h4 className='portfolio__tituloTecnologia'>Tecnologías</h4>
            <div className='portfolio__categoria'>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("Web")}>Web</button>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("App")}>App</button>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("Scraping")}>Scraping</button>
            </div>
            <div className='portfolio__categoria portfolio__categoria--lenguajes'>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("React")}>React</button>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("js")}>Javascript</button>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("Node.js")}>Node.js</button>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("Python")}>Python</button>
              <button className='portfolio__especializacion' onClick={() => setTecnologia("Flutter")}>Flutter</button>
            </div>
          </div>

          <div className='portfolio__contenedorProyectos'>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                link={project.link}
                imageSrc={project.imageSrc}
                videoSrc={project.videoSrc}
                title={project.title}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
