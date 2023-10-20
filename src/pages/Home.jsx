import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import IntroSlide from '../components/IntroSlide'

const Home = () => {

  return (
    <div className='h-[480px]'>
      <IntroSlide/>
    </div>
  )
}

export default Home
