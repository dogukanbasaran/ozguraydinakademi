import React from 'react'
import introPhoto from '../assets/carousel/1.png'
import layout1 from '../assets/Layout/layout.png'
import instructorPhoto from '../assets/instructor/eyupserdarkucuk.jpg'
import { Link } from 'react-router-dom'


const Intro = () => {
  return (

    <section id='introduction' className='flex flex-col space-y-12 md:space-y-0 md:flex-row h-full w-full md:max-w-7xl px-5  mb-[180px] mt-[100px] sm:mt-[150px] mx-auto justify-center'>
         {/* INTRO LEFT CONTENT */}
        <div id='intro-left' className='flex flex-col mt-12 w-full text-center justify-center items-center'>
              <div id='intro-text' className='flex flex-col w-full'>
                <h2 className='font-heading font-semibold text-[32px] md:text-[48px]'>EĞİTİM PLATFORMU</h2>
                <span className='font-text px-6 sm:px-24 lg:px-32 xl:px-0 mt-4 text-[18px] md:text-[24px] font-medium'>Özgür Aydın Akademi, öğrencilere uzman öğretmenler eşliğinde özelleştirilmiş dersler, interaktif öğrenme materyalleri ve sınav hazırlığı imkanı sunar. Akademik başarıya giden yolda bizimle adım atın!</span>
              </div>
              <div id='intro-btn' className='flex mt-6 w-full justify-center'>
                  <Link to="/packages">
                    <button className='bg-gray-800 rounded-md text-neutral-300 font-text px-8 sm:px-12 py-2 hover:bg-gray-300 hover:text-neutral-800 duration-300'>Paketlere Göz At</button>
                  </Link>
              </div>
        </div>

        {/* INTRO RIGHT CONTENT */}
        <div id='intro-right' className='hidden xl:flex xl:flex-col w-full md:ml-24 lg:ml-0 ml-2'>
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
                     <div className='w-[200px] h-[100px] left-[80px] top-[150px] z-30 absolute rounded-md backdrop-blur-sm bg-transparent'></div>
                     <div className='w-[180px] flex items-center justify-center h-[80px] z-40  rounded-[8px] top-[160px] left-[90px] absolute border-[0.5px] bg-white cursor-pointer hover:scale-105 duration-500'>
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
                     <div className='w-[200px] h-[100px] z-30 left-[410px] top-[208px] absolute rounded-md  backdrop-blur-sm bg-transparent'></div>
                     <div className='w-[180px] flex items-center justify-center h-[80px] z-40  rounded-[8px] top-[218px] left-[420px] absolute border-[0.5px] bg-white cursor-pointer hover:scale-105 duration-500'>
                         
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
