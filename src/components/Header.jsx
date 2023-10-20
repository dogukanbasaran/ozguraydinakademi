import React from 'react'
import logo from '../assets/logo.png'
import Menu from './Menu'
import {FiSearch} from 'react-icons/fi'
import {GiMoon} from 'react-icons/gi'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <header id='header'>
      <div className='h-[120px] flex pl-10 pr-5  xl:px-5 justify-between xl:justify-center items-center gap-20' id='header-container'>
        {/* LOGO */}
         <div id='logo'>
           <a href="/" className='flex items-center'>
             <img src={logo} className='w-[150px] xl:w-[120px]'/>
           </a>
         </div>


         {/* NAV MENU */}
         <Menu/>


        {/* SEARCH and DARK-LIGHT THEME */}
         <div id='search-and-theme' className='flex items-center gap-2'>

            {/* SEARCH AREA */}
            <form className='hidden xl:block'>
              {/* border-r border-black --> Dark Light Theme eklendiğinde */}
              <div className='flex group  px-4 py-1'>  
                <input type='text' className='opacity-0 group-hover:opacity-100 bg-transparent border-b border-slate-800 focus:outline-none w-[150px] transition duration-500'/>
                <button className='text-[24px] hover:text-slate-500'><FiSearch/></button>
              </div>
            </form>


            {/* DARK-LIGHT THEME */}
            {/* <button className='text-[24px] hover:text-slate-500 border-black'><GiMoon/></button> */}
            {/* MOBILE MENU */}
            <button><FaBars className='block text-[24px] xl:hidden hover:text-slate-500'/></button>
         </div>




      </div>
    </header>
  )
}

export default Header
