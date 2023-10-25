import React from 'react'
import { FaInstagram, FaThreads, FaYoutube, FaWhatsapp} from "react-icons/fa6";
import {BsTelephoneFill} from "react-icons/bs"
import {FaEnvelope} from "react-icons/fa"
import Map from "../components/Map"

const Footer = () => {
  return (
    <footer id='footer'>
      {/* Footer Container */}
      <div className='pt-10 mt-10 bg-gray-800 text-neutral-300'>
         {/* Top Footer */}
         <div id='topFooter' className='container mx-auto  flex flex-col lg:flex-row'>

              {/* Top Footer - Left Content */}
            <div className='basis-1/3 pl-5 pt-5' id='logo-and-contact-info'>

                  {/* Top Footer Logo */}
                  <div id='logo' className='flex items-center justify-center lg:justify-start'>
                      <a href="/">
                          <h1 className='text-neutral-300 font-extrabold font-heading text-[20px] whitespace-nowrap'>Özgür Aydın Akademi</h1>
                      </a>
                  </div>

                  {/* Top Footer Contact Info */}
                  <div className='flex justify-center lg:justify-start' id='contact-info'>
                    <ul className='grid  grid-cols-1 mt-5'>
                      {/* Phone 1 */}
                      <li>
                            <p className='inline-block'><p  className='flex items-center gap-2 font-text font-semibold hover:text-neutral-500 cursor-pointer'><BsTelephoneFill className='text-[20px]'/>0534 739 59 78</p></p>
                      </li>

                      {/* Phone 2
                      <li>
                             <p className='inline-block'><a href="#" className='flex items-center gap-2 font-text font-semibold hover:text-slate-500'><BsTelephoneFill className='text-[20px]'/>0850 000 00 00</a></p>
                      </li> */}

                      {/* Whatsapp */}
                      <li>
                              <p className='inline-block'><a href="https://wa.me/905347395978" className='flex items-center gap-2 font-text font-semibold hover:text-neutral-500'><FaWhatsapp className='text-[20px]'/>Whatsapp</a></p>
                      </li>

                       {/* Mail */}
                       <li>
                            <p className='inline-block'><a href='mailto:ozguraydinakademi@gmail.com' className='flex items-center gap-2 font-text font-semibold hover:text-neutral-500'><FaEnvelope className='text-[20px]'/>ozguraydinakademi@gmail.com</a></p>
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
                  <a href="https://www.instagram.com/ozguraydinakademi/" className='text-[24px] hover:text-neutral-500'><FaInstagram/></a>
                  <a href="https://www.youtube.com/c/MathFlixakademi" className='text-[24px] hover:text-neutral-500'><FaYoutube/></a>
                  <a href="https://www.threads.net/@ozguraydinakademi" className='text-[24px] hover:text-neutral-500'><FaThreads/></a>
              </div>

            </div>

            {/* Top Footer - Right Content */}
            <div className='basis-1/3 pt-5  sm:pr-5' id='e-bulten'>
              {/* E-Bulten Text */}
              <div>
                <h2 className='font-heading font-bold flex justify-center lg:justify-end'>Haritada Biz</h2>
              </div>
                <Map/>
              </div>

         </div>
         
         {/* Bot Footer */}
         <div id='botFooter' className='p-5'>
              <p className='font-text flex justify-center'>2023 Dogukan Basaran No &copy; Copyright.</p>
         </div>
      </div>
    </footer>
  )
}

export default Footer
