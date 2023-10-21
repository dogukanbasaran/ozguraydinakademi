import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import React from 'react'

const Menu = () => {
  return (
     <div className="flex gap-12 font-heading font-semibold whitespace-nowrap uppercase" id="menu">
        <NavLink to="/"  className="hover:text-slate-500 xl:text-[16px]  hidden xl:block">Ana Sayfa</NavLink>
        <NavLink to="/" className="hover:text-slate-500  xl:text-[16px] hidden xl:block">Hakkında</NavLink>
        <NavLink to="/" className="hover:text-slate-500  xl:text-[16px] hidden xl:block">Paketler</NavLink>
        <NavLink to="/contact" className="hover:text-slate-500 xl:text-[16px] hidden xl:block">ILETISIM</NavLink>
        <MobileMenu/>
     </div>
  )
}

export default Menu;