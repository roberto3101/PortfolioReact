import React, { useEffect } from 'react'
import Logo from './Logo'
import { MdMenu } from "react-icons/md";

export default function Navbar({isMenuOpen, setIsMenuOpen}) {
useEffect(() => {
  
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

}, [isMenuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className='max-w-5xl mx-auto px-4'>

        <div className='flex justify-between items-center font-mono h-16'>
          <Logo />


       { !isMenuOpen &&  <div onClick={() => setIsMenuOpen(prev => !prev)} className="text-2xl absolute right-7 z-40 cursor-pointer font-mono block md:hidden">
  <MdMenu />
</div>
}




          <div className='flex md:flex items-center space-x-8 '>
            <div className='hidden md:flex items-center space-x-8'>

              <a href="#Home" className='text-gray-300 hover:text-xl hover:text-white transition-all'>Inicio
              </a>

              <a href="#About" className='text-gray-300 hover:text-xl hover:text-white transition-all'>
                Acerca de
              </a>

              <a href="#Projects" className='text-gray-300 hover:text-xl hover:text-white transition-all'>
                Proyectos
              </a>

              <a href="#Contact" className='text-gray-300 hover:text-xl hover:text-white transition-all'>
                Contacto
              </a>















            </div>


          </div>

        </div>


      </div>

    </nav>

  )
}
