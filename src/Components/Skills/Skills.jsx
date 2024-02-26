
import React from 'react'
import { habilidades } from './habilidades'
import { FaJs, FaReact, FaNode, FaHtml5, FaCss3, FaGit, FaDocker, FaSass } from 'react-icons/fa';
import "./Skills.css"
const iconosHabilidades = {
  "Javascript": FaJs,
  "React": FaReact,
  "Node.js": FaNode,
  "HTML": FaHtml5,
  "Css": FaCss3,
  "Git": FaGit,
  "Docker": FaDocker,
  "Sass": FaSass
};

const Skills = () => {
  return (
    <section id='skills'>
      <div className='divSkills'>
        <div className='divSkills2'>
          <h1 className='habilidades'> Habilidades y tecnologias</h1>
          <p className='parrafoSkills'>Estos son los conocimientos que tengo</p>
          <div className='cardsSkills'>
            {habilidades.map((habilidad) => {
              const IconComponent = iconosHabilidades[habilidad.name];
              return (
                <div className='nombreSkill'>
                <h2 className='h2Skills'>
                  {IconComponent && <IconComponent className="iconosHabilidades" />}
                  {habilidad.name}
                </h2>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills