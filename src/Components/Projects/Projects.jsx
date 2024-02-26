
import React from 'react'
import { projects } from "./data"
import "./Projects.css"

function Projects() {
  return (
    <section id="projects" className='sectionProjects'>
    <div className='divProjects'>
      <h1 className='h1Projects'>Aplicaciones que construí</h1>
      <p className='parrafoProjects'>Acá encontrarás aplicaciones web frontend/backend y mis avances como desarrollador de videojuegos</p>
    </div>
    <div className='divProyectos'>
      {projects.map((project) => (
        <a
          href={project.link}
          key={project.img}
          className='aProjects'>
            <div className='imagenProjects'>
              <img
                alt="gallery"
                className='imgP'
                src={project.img}
              />
              <div className='projectDiv'>
                <h3 className='h3Projects'>
                  {project.subtitle}
                </h3>
                <h2 className='h2Projects'>
                  {project.title}
                </h2>
                <p className='parrafoProject'>{project.description}</p>
              </div>
            </div>
        </a>
      ))}
    </div>
</section>
  )
}

export default Projects