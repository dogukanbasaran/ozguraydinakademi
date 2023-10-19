import React from 'react'
import logo from '../assets/logo.png'
import Menu from './Menu'
import {FiSearch} from 'react-icons/fi'
import {GiMoon} from 'react-icons/gi'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <header id='header'>
      <div className='h-[120px] border flex justify-between items-center' id='header-container'>
        {/* LOGO */}
         <div id='logo'>
           <a href="/" className='flex items-center gap-2'>
             <img src={logo} className=' w-[200px] xl:w-[240px]'/>
           </a>
         </div>


         {/* NAV MENU */}
         <Menu/>


        {/* SEARCH - LIGHT DARK THEME */}
         <div id='search-and-theme' className='flex items-center gap-2'>
            <button className='text-[20px] xl:text-[24px] hover:text-slate-500'><FiSearch/></button>
            <button className='text-[20px] xl:text-[24px] hover:text-slate-500'><GiMoon/></button>
            {/* MOBILE MENU */}
            <button><FaBars className='block text-[20px] xl:hidden hover:text-slate-500'/></button>
         </div>




      </div>
    </header>
  )
}

export default Header
