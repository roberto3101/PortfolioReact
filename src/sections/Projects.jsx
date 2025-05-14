import { useState } from "react";

import BiblioSystem from "../assets/BiblioSystem.jpg";

import travel from "../assets/travel-app.jpg";
import crudsito from "../assets/CRUD.jpg";
import thenx from "../assets/Thenx.png";
import highrise from "../assets/highrise.png";
import RevealOnScroll from "../Ui/RevealOnScroll";

function Projects() {
  const [projects] = useState([
    {
      image: BiblioSystem,
      name: "BiblioSystem",
      brief:
        "Sistema de gestion de bibliotecas con login, roles de usuario y CRUD para gestionar libros y alumnos.",
      technologies: ["Java", "MySQL", "Tomcat"]
    },
    {
      image: crudsito,
      name: "CRUD App",
      brief:
        "Crud sencillo con react y mysql.",
      technologies: ["React",  "MongoDB"]
    },
    {
      image: thenx,
      name: "Web de ejercicios",
      brief:
        "Mi primera aplicación web de ejercicios para gestionar rutinas y progresos.",
      technologies: ["Html", "Css", "Javascript"]
    },
    {
      image: highrise,
      name: "Desarrollo de Bots en JS y Node.js",
      brief:
        "Desarrollo de Bots en JS y Node.js para automatizar tareas como emotes, bucles de emotes, teleport, roles de usuario, sistema de donaciones.",
      technologies: ["Javascript", "Node.js"]
    },
  ]);
  
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Algunos Proyectos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">Ver Proyecto</p>
                    <a
                      href="https://github.com/roberto3101"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;