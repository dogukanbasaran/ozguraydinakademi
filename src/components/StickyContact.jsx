import React from 'react'
import {AiFillPhone, AiOutlineWhatsApp, AiOutlineInstagram, AiFillYoutube} from "react-icons/ai"
import {FaThreads} from "react-icons/fa6"



const StickyContact = () => {
  return (
    <>
    <div className='hidden sm:block h-[250px] w-[60px] rounded-l-xl bg-gray-800 text-white border-t border-b border-l fixed  top-[150px] right-0 z-50'>

            <div className='h-[50px] border-b flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='tel:+905347395978'><AiFillPhone className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px] border-b flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://wa.me/905347395978'><AiOutlineWhatsApp className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px] border-b flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://www.youtube.com/c/MathFlixakademi'><AiFillYoutube className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px] border-b flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://www.instagram.com/ozguraydinakademi/'><AiOutlineInstagram className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px]  flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://www.threads.net/@ozguraydinakademi'><FaThreads className='w-full text-[35px]'/></a>
            </div>
    </div>

    <div className=' sm:hidden h-[50px] w-[full] flex flex-row  bg-gray-800 text-white rounded-t-xl  border-t border-r border-l fixed left-[0px] bottom-0 z-50'>

            <div className='h-[50px] w-[50px] border-r flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='tel:+905347395978'><AiFillPhone className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px] w-[50px] border-r flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://wa.me/905347395978'><AiOutlineWhatsApp className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px] w-[50px] border-r flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://www.youtube.com/c/MathFlixakademi'><AiFillYoutube className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px] w-[50px] border-r flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://www.instagram.com/ozguraydinakademi/'><AiOutlineInstagram className='w-full text-[40px]'/></a>
            </div>
            <div className='h-[50px] w-[50px]  flex justify-center items-center cursor-pointer hover:text-gray-300 hover:scale-105 duration-300'>
                <a href='https://www.threads.net/@ozguraydinakademi'><FaThreads className='w-full text-[35px]'/></a>
            </div>
    </div>
</>
  )
}

export default StickyContact
