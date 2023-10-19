import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp} from "react-icons/fa6";
import {BsTelephoneFill} from "react-icons/bs"
import {FaEnvelope} from "react-icons/fa"

const Footer = () => {
  return (
    <footer id='footer'>
      {/* Footer Container */}
      <div className='border-t-2 px-5'>
         {/* Top Footer */}
         <div id='topFooter' className='flex items-center  justify-between gap-20'>
              {/* Top Footer - Left Content */}
            <div className='basis-1/3 mr-48'>
              <div id='footer-logo'>
                <a href="/" className='flex items-center gap-2'>
                    <img src={logo} className='w-[180px]'/>
                </a>
              </div>
              <div className='container' id='contact-info'>
                <ul className='grid grid-rows-2 grid-cols-2'>
                  <li>
                        <a href="#" className='flex gap-2 items-center font-text font-semibold hover:text-slate-500 mb-2'>
                            <BsTelephoneFill className='text-[18px]'/> 0850 000 00 00
                        </a>  
                  </li>
                  <li>
                    <a href="#" className='flex gap-2 items-center font-text font-semibold hover:text-slate-500'>
                        <FaEnvelope className='text-[18px]' /> info@ozguraydin

                    </a>
                  </li>
                  <li>
                        <a href="#" className='flex gap-2 items-center font-text font-semibold hover:text-slate-500'>
                            <BsTelephoneFill className='text-[18px]' /> 0850 000 00 00
                        </a>  
                  </li>

                  <li>
                    <a href="#" className='flex gap-2 items-center font-text font-semibold hover:text-slate-500'>
                      <FaWhatsapp className='text-[18px]'/> Whatsapp
                    </a>
                  </li>
                 
                </ul>

              </div>       
            </div>

            {/* Top Footer - Middle Content */}
            <div className='basis-1/3'>
              <div>
                <h2 className='font-heading font-bold'>Sosyal Medya</h2>
                <p className='font-text'>Bizi takip etmek için</p>
              </div>
              <div className='flex gap-5 mt-4'>
                  <a href="#" className='text-[24px] hover:text-slate-500'><FaInstagram/></a>
                  <a href="#" className='text-[24px] hover:text-slate-500'><FaYoutube/></a>
                  <a href="#" className='text-[24px] hover:text-slate-500'><FaLinkedin/></a>
              </div>

            </div>

            {/* Top Footer - Right Content */}
            <div className='basis-1/3' id='e-bulten'>
              <div>
                <h2 className='font-heading font-bold'>E-Bülten Aboneliği</h2>
                <p className='font-text'>Yeniliklerden haberdar olmak için</p>
              </div>
              <form method='post' autoComplete='off' id='e-bulten-form' className='flex mt-5'>
                  <input type='email' className='bg-slate-200 h-[30px] p-4 font-text text-[16px] outline-none' placeholder='E-posta adresiniz'/>
                  <button className='border px-2 bg-black text-white font-text font-semibold'>ABONE OL</button>
              </form>

            </div>

         </div>
         
         {/* Bot Footer */}
         <div id='botFooter' className='mt-5'>
              <p className='font-text font-semibold flex justify-center'>2023 Dogukan Basaran No &copy; Copyright.</p>
         </div>
      </div>
    </footer>
  )
}

export default Footer
