import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import React from 'react'

const Menu = () => {
  return (
     <div className="flex gap-12 font-heading font-semibold whitespace-nowrap uppercase" id="menu">
        <NavLink to="/"  className="hover:text-neutral-500 xl:text-[16px]  hidden md:block">Ana Sayfa</NavLink>
        <NavLink to="/packages" className="hover:hover:text-neutral-500  xl:text-[16px] hidden md:block">Paketler</NavLink>
        <NavLink to="/contact" className="hover:text-neutral-500 xl:text-[16px] hidden md:block">ILETISIM</NavLink>
        <MobileMenu/>
     </div>
  )
}

export default Menu;