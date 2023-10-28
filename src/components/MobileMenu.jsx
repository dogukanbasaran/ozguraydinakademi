import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';



const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return  (

    <div className='flex flex-col items-center relative'>
        <button onClick={toggleMenu}><FaBars className='block lg:hidden text-[24px] hover:text-slate-500'/></button>
  
        {menuOpen && (
        <div className="lg:hidden flex flex-col gap-2 absolute top-10 right-0 bg-gray-800 text-neutral-300 text-center rounded-md">
                <NavLink to="/" className={"hover:bg-gray-600  px-5 py-2"}>Ana Sayfa</NavLink>
                <NavLink to="/packages" className={"hover:bg-gray-600  px-5 py-2"}>Paketler</NavLink>
                <NavLink to="/contact" className={"hover:bg-gray-600  px-5 py-2"}>Iletisim</NavLink>

        </div>
      )}
       

         
    </div>
  
  
  )
}

export default MobileMenu
