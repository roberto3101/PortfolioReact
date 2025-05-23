import React from "react";
import profileImg from "../assets/profileImg.jpg";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/resume.pdf";

function Home() {
    return (
        <section
            id="Home"
            className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15"
        >
            <div className="text-center z-10 px-4">
                <img
                    className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all"
                    src={profileImg}
                    alt="Profile Image"
                />
            </div>
            <div className="text-center font-mono z-10 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-tight">
                    José Roberto
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                    👨‍💻 Desarrollador Frontend con React, enfocado en crear interfaces dinámicas, escalables y de alto rendimiento.
                    Con conocimientos en MySQL y pasión por ofrecer experiencias de usuario atractivas y funcionales. Siempre en busca de aprender y aportar soluciones creativas.
                </p>
                {/* Versión responsive mejorada de los botones */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4 sm:gap-0">
                    <a
                        className="bg-gradient-to-r from-teal-500 to-indigo-600 flex flex-row items-center justify-center w-full sm:w-auto py-3 px-4 sm:px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden text-center"
                        href="Contact"
                    >
                        Contactame
                    </a>
                    <a
                        className="bg-gradient-to-r from-teal-500 to-indigo-600 flex flex-row items-center justify-center w-full sm:w-auto py-3 px-4 sm:px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden text-center"
                        href={resume}
                        download
                    >
                        <span className="sm:hidden">CV</span>
                        <span className="hidden sm:inline">Descargar Curriculum</span>
                        <span className="h-5 ml-2 sm:ml-3 text-xl sm:text-2xl text-white">
                            <FiDownload />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;