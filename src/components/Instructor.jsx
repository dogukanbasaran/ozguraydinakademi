import React from 'react'
import person1 from '../assets/instructor/eyupserdarkucuk.jpg'

const Instructor = () => {
  return (
    <section id='instructor'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center gap-24 text-neutral-800'>

                <div className='cursor-pointer flex items-center justify-center gap-5 hover:bg-gray-800 hover:text-white duration-300 rounded-md p-4 mx-5'>
                    <img src={person1} className='max-w-[150px] rounded-full'/>
                    <div>
                        <h2 className='text-[16px] font-bold tracking-wide font-heading'>Eyüp Serdar Küçük</h2>
                        <p className='text[12px] font-text'>İngilizce Eğitmeni</p>
                    </div>
                </div>

                <div className='cursor-pointer flex items-center justify-center gap-5 hover:bg-gray-800 hover:text-white duration-300 rounded-md p-4 mx-5'>
                    <img src={person1} className='max-w-[150px] rounded-full'/>
                    <div>
                        <h2 className='text-[16px] font-bold tracking-wide font-heading'>Eyüp Serdar Küçük</h2>
                        <p className='text[12px] font-text'>İngilizce Eğitmeni</p>
                    </div>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Instructor
