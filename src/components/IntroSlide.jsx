import React from 'react'
import introPhoto from '../assets/carousel/1.png'
import layout1 from '../assets/Layout/layout.png'
import instructorPhoto from '../assets/instructor/eyupserdarkucuk.jpg'
import { Link } from 'react-router-dom'


const Intro = () => {
  return (

    <section id='introduction' className='flex flex-col space-y-12 md:space-y-0 md:flex-row h-full w-full md:max-w-7xl px-5  mb-20 mx-auto justify-center'>
         {/* INTRO LEFT CONTENT */}
        <div id='intro-left' className='flex flex-col mt-12 w-full text-center justify-center items-center xl:items-start xl:justify-start  md:w-[555px]'>
              <div id='intro-text' className='flex flex-col w-full md:w-[585px]'>
                <span className='font-heading text-neutral-800 text-[32px] md:text-[48px] font-semibold'>Eğitim Platformu</span>
                <span className='font-text px-4 md:w-[514px] md:px-0 mt-4 text-[16px] md:text-[24px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, magnam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, provident.</span>
              </div>
              <div id='intro-btn' className='flex mt-6 w-full justify-center'>
                  <Link to="/packages">
                    <button className='bg-gray-800 rounded-md text-neutral-300 font-text px-8 sm:px-12 py-2 hover:bg-gray-300 hover:text-neutral-800 duration-300'>Paketlere Göz At</button>
                  </Link>
              </div>
        </div>

        {/* INTRO RIGHT CONTENT */}
        <div id='intro-right' className='hidden xl:flex xl:flex-col w-full md:ml-24 lg:ml-0 ml-2 md:w-3/4'>
            <div className='hidden xl:block w-full relative'>
                  {/* INTRO PHOTO */}
                  <div className='w-[460px] h-[345px] left-[120px] top-[60px] absolute'>
                      <img src={introPhoto} className='w-[full] h-[auto] left-[0px] top-[-151px] absolute z-10'/>
                  </div>
                  {/* INTRO PHOTO LAYOUT */}
                  <div className='w-[460px] h-[150px] left-[120px]  top-[80px] absolute'>
                    <img src={layout1}/>
                  </div>

                  {/* INTRO TEXTS */}
                  <div className='w-[220px] h-[150px] left-0 top-0 absolute' style={{opacity:1, transform: 'none'}}>

                      {/* OZGUR AYDIN  */}
                     <div className='w-[200px] h-[100px] left-5 top-0 absolute rounded-md border-[0.5px] backdrop-blur-lg bg-gray-100'></div>
                     <div className='w-[180px] flex items-center justify-center h-[80px]  rounded-[8px] top-[10px] left-[30px] absolute border bg-white cursor-pointer hover:scale-105 duration-500'>
                        <Link to="/ozguraydin">
                         <div className='flex flex-row justify-center items-center space-y-1 space-x-1 left-[10px] bottom-[10px] absolute  text-neutral-800'>
                          <div>
                                <img src={instructorPhoto} className='rounded-md w-[60px] h-[60px]'/>
                          </div>
                          <div>
                            <h2 className='text-[16px] font-heading font-semibold whitespace-nowrap'>Özgür Aydın</h2>
                            <h3 className=' text-[14px] text-center font-text'>Matematik</h3>
                          </div>

                         </div>
                         </Link>
                     </div>
                     
                     {/* EYUP SERDAR */}
                     <div className='w-[200px] h-[100px] left-[480px] top-[0px] absolute rounded-md border-[0.5px] backdrop-blur-lg bg-gray-100'></div>
                     <div className='w-[180px] flex items-center justify-center h-[80px]  rounded-[8px] top-[10px] left-[490px] absolute border bg-white cursor-pointer hover:scale-105 duration-500'>
                         
                          <Link to="/eyupserdar">
                            <div className='flex flex-row justify-center items-center space-y-1 space-x-1 left-[10px] bottom-[10px] absolute  text-neutral-800'>
                              <div>
                                    <img src={instructorPhoto} className='rounded-md w-[60px] h-[60px]'/>
                              </div>
                              <div>
                                <h2 className='text-[16px] font-heading font-semibold whitespace-nowrap'>Eyüp Serdar</h2>
                                <h3 className=' text-[14px] text-center font-text'>İngilizce</h3>
                              </div>

                            </div>
                         </Link>
                     </div>
                     
                  </div>
            </div>
        </div>

    </section>
  )
}

export default Intro
