import React from 'react'
import whyChooseUsPhoto from '../assets/carousel/3.png'
import whyChooseUsPhoto2 from '../assets/carousel/4.png'

const WhyChooseUs = () => {
  return (
    <section id='why-u-choose-us'>
         <div className='container grid grid-cols-3 mx-auto h-[auto] py-10 items-center'>

              <div id='choose-us-left' className='hidden xl:block'>
                  <img src={whyChooseUsPhoto2} className='w-[400px] h-[auto]'/>
              </div>

               <div id='choose-us-mid'>
                  <div id='intro-text'>
                        <h1 className='font-heading font-bold text-[48px] text-neutral-800 text-center mb-10'>Neden Bizi Seçmelisin?</h1>
                        <p className='font-text text-[16]px] text-neutral-800 text-center mx-12 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus, porro enim voluptatum commodi magnam debitis. Reprehenderit voluptate rerum magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi molestias ab commodi sunt temporibus illum, voluptas vitae ullam cumque fugit laboriosam et nihil. Expedita amet reprehenderit dolorum minus veniam? Veritatis earum mollitia nam unde architecto, sint molestiae! Quis labore officiis non, molestiae eum obcaecati minus molestias sunt quod id omnis.</p>  
                    </div>
                    <div id='intro-btn' className='flex justify-center gap-2'>
                        <button className='bg-gray-800 rounded-md text-neutral-300 font-text font-semib px-12 py-2 hover:bg-gray-300 hover:text-neutral-800 duration-300'>Daha Fazlasını Oku</button>
                    </div>
               </div>

               <div id='choose-us-right' className='hidden xl:block'>
                  <img src={whyChooseUsPhoto} className='w-[400px] h-[350px]'/>
              </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
