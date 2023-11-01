import React from 'react'
import mapPhoto from '../assets/map.jpg'


const Map = () => {
  return (
    <section id='map' className='flex justify-center lg:justify-end relative mt-5'>
        <img src={mapPhoto} className='rounded-md h-[auto] w-[350px] sm:w-[400px]'/>       
    </section>
  )
}

export default Map
