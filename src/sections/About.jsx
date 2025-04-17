import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "TypeScript ",
    "React",
    "TailwindCSS",
    "Node Js",
    "Express",
    "Sql Server",
    "MySql"
  ];
  return (
    <section
      id="About"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Perfil
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
           Desarrollador con experiencia en la creación de aplicaciones web escalables y en la creación de soluciones innovadoras.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>Computación e informatica </em>{" "}
                  </strong>
                  Cibertec (2022-2025)
                </li>
                <li>
                  Desarrollo web especializado en react, gestion de frontend, backend y bases de datos...
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Frontend Developer (Freelance / Contract)</em>
                </strong>
                📍
                <br />* Remoto | Enero 2024 - Presente <br />

Construí sitios web responsivos y accesibles utilizando React.js, Next.js y Tailwind CSS <br />

Desarrollé interfaces de usuario dinámicas con JavaScript (ES6+), HTML y CSS <br />

Integré APIs RESTful y optimicé el rendimiento para lograr tiempos de carga más rápidos.
              </li>
              <li>
                Proyectos Universitarios Funcionales...
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;