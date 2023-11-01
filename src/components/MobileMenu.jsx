import React, {useState} from 'react'
import { FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';



const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuIcon, setMobileMenuIcon] = useState(<FaBars/>);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMobileMenuIcon(menuOpen ? <FaBars/> : <AiOutlineClose/>);
  }

  return  (

    <div className='flex flex-col items-center relative'>
        <button className='block md:hidden text-[24px] hover:text-slate-500' onClick={toggleMenu}>{mobileMenuIcon}</button>
  
        {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 absolute top-14 right-0 border bg-gray-800 text-neutral-300 text-center rounded-md">
                <NavLink to="/" className={"hover:bg-gray-600  px-5 py-2"}>Ana Sayfa</NavLink>
                <NavLink to="/packages" className={"hover:bg-gray-600  px-5 py-2"}>Paketler</NavLink>
                <NavLink to="/contact" className={"hover:bg-gray-600  px-5 py-2"}>Iletisim</NavLink>

        </div>
      )}
       

         
    </div>
  
  
  )
}

export default MobileMenu
