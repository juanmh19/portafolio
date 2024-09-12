import React, { useState } from 'react';

const ProjectCard = ({ link, imageSrc, videoSrc, title, technologies }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={link}
            className='portfolio__proyecto'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Si está en hover, muestra el video, si no, la imagen */}
            {isHovered ? (
                <video className='portfolio__media' src={videoSrc} autoPlay muted loop />
            ) : (
                <img className='portfolio__media' src={imageSrc} alt={title} />
            )}
            <p className='portfolio__titulo'>{title}</p>
            <div className='portfolio__tecnologias'>
                {technologies.map((tech, index) => (
                    <div key={index} className='portfolio__tecnologia'>
                        <img src={tech.icon} alt={tech.name} />
                        <p className={tech.name.toLowerCase()}>{tech.name}</p>
                    </div>
                ))}
            </div>
        </a>
    );
};

export default ProjectCard;
