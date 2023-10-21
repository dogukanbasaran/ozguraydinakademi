import React from 'react'
import logo from '../assets/logo.png'
import Menu from './Menu'
import {FiSearch} from 'react-icons/fi'
import {GiMoon} from 'react-icons/gi'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <header id='header'>
      <div className='container mx-auto border'>
            <nav className='h-[120px] flex justify-between items-center gap-8'>
              {/* LOGO */}
              <div id='logo'>
                <a href="/">
                    <h1 className='text-neutral-800 font-extrabold font-heading text-[24px] whitespace-nowrap'>Özgür Aydın Akademi</h1>
                </a>
              </div>
              <Menu/>
            </nav>
      </div>
    </header>
  )
}

export default Header
