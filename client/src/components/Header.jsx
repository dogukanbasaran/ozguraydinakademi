import React, {useState, useEffect} from 'react'
import Menu from './Menu'


const Header = () => {

  const [navBar, setNavbar] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return (
    <header id='header' className={`${navBar ? 'bg-gray-800 text-neutral-300' : 'bg-white text-neutral-800'} transition-all duration-500 fixed flex items-center w-full z-50`}>
            <nav className='h-[80px] sm:h-[100px] flex justify-between w-full items-center gap-8 px-1 sm:px-5'>
              {/* LOGO */}
              <div id='logo' className='lg:px-12'>
                <a href="/">
                    <h1 className='font-extrabold font-heading text-[24px] whitespace-nowrap'>Özgür Aydın Akademi</h1>
                </a>
              </div>
              <Menu/>
            </nav>
    </header>
  )
}

export default Header
