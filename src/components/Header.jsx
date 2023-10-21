import React from 'react'
import Menu from './Menu'


const Header = () => {
  return (
    <header id='header'>
      <div className='lg:container mx-auto'>
            <nav className='h-[120px] flex justify-between items-center gap-8 px-5'>
              {/* LOGO */}
              <div id='logo' className='lg:px-12'>
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
