import { NavLink } from "react-router-dom";

import React from 'react'

const Menu = () => {
  return (
     <nav className="flex gap-12 font-heading font-semibold" id="menu">
        <NavLink to="/"  className="hover:text-slate-500 xl:text-[15px] hidden xl:block">Ana Sayfa</NavLink>
        <NavLink to="/" className="hover:text-slate-500 xl:text-[15px] hidden xl:block">Keşfet</NavLink>
        <NavLink to="/" className="hover:text-slate-500 xl:text-[15px] hidden xl:block">Neden Farklıyız?</NavLink>
        <NavLink to="/" className="hover:text-slate-500 xl:text-[15px] hidden xl:block">TYT-AYT Hazırlık</NavLink>
        <NavLink to="/" className="hover:text-slate-500 xl:text-[15px] hidden xl:block">Paketler</NavLink>
        <NavLink to="/contact" className="hover:text-slate-500 xl:text-[15px] hidden xl:block">İletişim</NavLink>
     </nav>
  )
}

export default Menu;