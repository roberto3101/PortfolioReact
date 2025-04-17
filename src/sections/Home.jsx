import React from "react";
import profileImg from "../assets/profileImg.jpg";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/resume.pdf";

function Home() {
    return (
        <section
            id="#Home"
            className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 "
        >
            <div className="text-center z-10 px-4">
                <img
                    className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all "
                    src={profileImg}
                    alt="Profile Image"
                />
            </div>
            <div className="text-center font-mono z-10 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right ">
                    José Roberto
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                    👨‍💻 Desarrollador Frontend con React, enfocado en crear interfaces dinámicas, escalables y de alto rendimiento.
                    Con conocimientos en MySQL y pasión por ofrecer experiencias de usuario atractivas y funcionales. Siempre en busca de aprender y aportar soluciones creativas.
                </p>
                <div className="flex justify-center items-center space-x-4">
                    <a
                        className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1   hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition relative overflow-hidden"
                        href="#contact"
                    >
                        Contact Me
                    </a>
                    <a
                        className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition relative overflow-hidden "
                        href={resume}
                        download
                    >
                        <p>Resume </p>
                        <span className="h-5 ml-3 text-2xl text-white">
                            <FiDownload />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;