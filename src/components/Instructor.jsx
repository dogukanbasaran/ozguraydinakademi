import React from 'react'
import person1 from '../assets/instructor/eyupserdarkucuk.jpg'

const Instructor = () => {
  return (
    <section id='instructor'>
        <div className='container mx-auto  m-5'>

            <div id='instructor-text' className='text-center'>
                <h2 className='text-[32px] font-bold font-heading tracking-wider mb-5 pt-5'>Eğitmenlerimiz</h2>
                <p className='text-[16px] font-text mb-10 mx-12'>
                    20 yıldan fazladır tecrübeli eğitmenlerimiz ile size hizmet vermekteyiz.
                </p>
            </div>


            <div className='flex flex-col lg:flex-row justify-center gap-5 text-neutral-800 pb-5'>

                <div className='cursor-pointer flex  justify-center gap-5 hover:bg-gray-800 hover:text-white duration-300 rounded-md p-4 mx-5'>
                    <img src={person1} className='max-w-[150px] max-h-[150px] rounded-md'/>
                    <div>
                        <h3 className='text-[16px] font-bold tracking-wide font-heading'>Eyüp Serdar Küçük</h3>
                        <p className='text-[16px] font-text'>İngilizce Eğitmeni</p>
                        <p className='text-[16px] font-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolores!</p>
                    </div>
                </div>

                <div className='cursor-pointer flex  justify-center gap-5 hover:bg-gray-800 hover:text-white duration-300 rounded-md p-4 mx-5'>
                    <img src={person1} className='max-w-[150px] rounded-md'/>
                    <div>
                        <h3 className='text-[16px] font-bold tracking-wide font-heading'>Eyüp Serdar Küçük</h3>
                        <p className='text-[16px] font-text'>İngilizce Eğitmeni</p>
                        <p className='text-[16px] font-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, labore?</p>
                    </div>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Instructor
