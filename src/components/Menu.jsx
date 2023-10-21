import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import React from 'react'

const Menu = () => {
  return (
     <div className="flex gap-12 font-heading font-semibold text-neutral-800 whitespace-nowrap uppercase" id="menu">
        <NavLink to="/"  className="hover:text-neutral-500 xl:text-[16px]  hidden lg:block">Ana Sayfa</NavLink>
        <NavLink to="/" className="hover:text-neutral-500  xl:text-[16px] hidden lg:block">Hakkında</NavLink>
        <NavLink to="/" className="hover:hover:text-neutral-500  xl:text-[16px] hidden lg:block">Paketler</NavLink>
        <NavLink to="/contact" className="hover:text-neutral-500 xl:text-[16px] hidden lg:block">ILETISIM</NavLink>
        <MobileMenu/>
     </div>
  )
}

export default Menu;