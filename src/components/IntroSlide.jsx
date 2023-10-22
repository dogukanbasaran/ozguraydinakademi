import React from 'react'
import introPhoto from '../assets/carousel/1.png'
import introPhoto2 from '../assets/carousel/2.png'

const Intro = () => {
  return (

    <section id='introduction'>
      <div className='container grid grid-cols-3 mx-auto h-[auto] py-10'>

      <div id='intro-left' className='flex justify-start'>
          <img src={introPhoto2} className='w-[400px] h-[400px] ml-10'/>

        </div>

        <div id='intro-mid'>
              <div id='intro-text'>
                    <h1 className='font-heading font-bold text-[48px] text-neutral-800 text-center mb-10'>Eğitim Platformu</h1>
                    <p className='font-text text-[16]px] text-neutral-800 text-center mx-12 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus, porro enim voluptatum commodi magnam debitis. Reprehenderit voluptate rerum magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi molestias ab commodi sunt temporibus illum, voluptas vitae ullam cumque fugit laboriosam et nihil. Expedita amet reprehenderit dolorum minus veniam? Veritatis earum mollitia nam unde architecto, sint molestiae! Quis labore officiis non, molestiae eum obcaecati minus molestias sunt quod id omnis.</p>  
              </div>
              <div id='intro-btn' className='flex justify-center gap-2'>
                    <button className='bg-gray-800 rounded-md text-neutral-300 font-text px-8 sm:px-12 py-2 hover:bg-gray-300 hover:text-neutral-800 duration-300'>Paketlere Göz At</button>
                    <button className='bg-gray-800 rounded-md text-neutral-300 font-text  px-8 sm:px-12 py-2 hover:bg-gray-300 hover:text-neutral-800 duration-300'>İletişime Geç</button>
              </div>
        </div>

        <div id='intro-right' className='flex justify-end'>
          <img src={introPhoto} className='w-[400px] h-[400px]'/>

        </div>


      </div>
    </section>
  )
}

export default Intro
