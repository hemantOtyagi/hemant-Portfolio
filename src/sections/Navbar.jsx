import { useState } from "react"
import { NavItems } from "./NavItems";

export const Navbar = () => {
  const [isOpen , setIsOpen ] = useState(false);

  //Prefferd way to write the toggle switch logic
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex justify-between items-center py-5 c-space ">
          <a href="/" className=" text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Hemant
          </a>
          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
            <img src={ isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
          </button>
          <nav className="sm:flex hidden">
            <NavItems/> 
          </nav>
        </div> 
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
           <NavItems/>
        </nav>
      </div>
    </header>
  )
}
