import React from 'react'
import slide1 from '../assets/carousel/3.jpg'


const IntroSlide = ({text, backgroundImage}) => {
    return (
        // INTRODUCTION SLIDE SECTION
        <section className='h-[auto] border bg-black group relative'>
            {/* SLIDE IMAGES */}
            <img src={slide1} alt='slide Image' className='object-cover h-[500px] w-full'/>
            {/* SLIDE CONTENT */}
            <div className='absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black'>
                {/* SLIDE CONTENT CONTAINER */}
                <div className='container pl-10 mb-[200px]'>
                    <h3 className='font-semibold font-heading text-[50px] text-neutral-400'>ÖZGÜR AYDIN AKADEMİ</h3>
                    <p className='font-text text-[24px] text-neutral-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eligendi enim ipsa in dignissimos exercitationem itaque vel reiciendis velit nobis at magnam temporibus ullam consectetur omnis expedita rerum accusamus, dolorem error alias sunt? Eligendi, libero ut minima dicta fuga placeat consequuntur veritatis esse possimus? Veniam autem quasi minima tempore fugiat!</p>
                </div>
            </div>


        </section>
      );
    };

export default IntroSlide
