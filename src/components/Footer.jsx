import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp} from "react-icons/fa6";
import {BsTelephoneFill} from "react-icons/bs"
import {FaEnvelope} from "react-icons/fa"

const Footer = () => {
  return (
    <footer id='footer'>
      {/* Footer Container */}
      <div className='pt-10 mt-10'>
         {/* Top Footer */}
         <div id='topFooter' className='flex flex-col lg:flex-row'>

              {/* Top Footer - Left Content */}
            <div className='basis-1/3 pl-5 pt-5' id='logo-and-contact-info'>

                  {/* Top Footer Logo */}
                  <div id='logo' className='flex items-center justify-center lg:justify-start'>
                      <a href="/">
                        <img src={logo} className='w-[100px]'/>
                      </a>
                  </div>

                  {/* Top Footer Contact Info */}
                  <div className='flex justify-center lg:justify-start' id='contact-info'>
                    <ul className='grid  grid-cols-1 mt-5'>
                      {/* Phone 1 */}
                      <li>
                            <p className='inline-block'><a href="#" className='flex items-center gap-2 font-text font-semibold hover:text-slate-500'><BsTelephoneFill className='text-[20px]'/>0850 000 00 00</a></p>
                      </li>

                      {/* Phone 2 */}
                      <li>
                             <p className='inline-block'><a href="#" className='flex items-center gap-2 font-text font-semibold hover:text-slate-500'><BsTelephoneFill className='text-[20px]'/>0850 000 00 00</a></p>
                      </li>

                      {/* Whatsapp */}
                      <li>
                              <p className='inline-block'><a href="https://wa.me/905306220528" className='flex items-center gap-2 font-text font-semibold hover:text-slate-500'><FaWhatsapp className='text-[20px]'/>Whatsapp</a></p>
                      </li>

                       {/* Mail */}
                       <li>
                            <p className='inline-block'><a href="#" className='flex items-center gap-2 font-text font-semibold hover:text-slate-500'><FaEnvelope className='text-[20px]'/>info@ozguraydinakademi.com.tr</a></p>
                      </li>
                    
                    </ul>

                  </div>       
            </div>

            {/* Top Footer - Middle Content */}
            <div className='basis-1/3 pt-5' id='social-media'>
              {/* Social Media Text */}
              <div>
                <h2 className='font-heading font-bold flex justify-center'>Sosyal Medya</h2>
                <p className='font-text flex justify-center'>Bizi takip etmek için</p>
              </div>
              {/* Social Media Link */}
              <div className='flex gap-5 justify-center pt-5'>
                  <a href="https://www.instagram.com/ozguraydinakademi/" className='text-[24px] hover:text-slate-500'><FaInstagram/></a>
                  <a href="#" className='text-[24px] hover:text-slate-500'><FaYoutube/></a>
                  <a href="#" className='text-[24px] hover:text-slate-500'><FaLinkedin/></a>
              </div>

            </div>

            {/* Top Footer - Right Content */}
            <div className='basis-1/3 pt-5 pr-5' id='e-bulten'>
              {/* E-Bulten Text */}
              <div>
                <h2 className='font-heading font-bold flex justify-center lg:justify-end'>E-Bülten Aboneliği</h2>
                <p className='font-text flex justify-center lg:justify-end'>Yeniliklerden haberdar olmak için</p>
              </div>

              {/* E-Bulten Form */}
              <form method='post' autoComplete='off' id='e-bulten-form' className='flex justify-center lg:justify-end pt-5'>
                  <input type='email' className='bg-slate-200 h-[30px] p-4 font-text text-[16px] outline-none' placeholder='E-posta adresiniz'/>
                  <button className='border px-2 bg-black text-white font-text font-semibold'>ABONE OL</button>
              </form>

            </div>

         </div>
         
         {/* Bot Footer */}
         <div id='botFooter' className='p-5'>
              <p className='font-text font-semibold flex justify-center'>2023 Dogukan Basaran No &copy; Copyright.</p>
         </div>
      </div>
    </footer>
  )
}

export default Footer
