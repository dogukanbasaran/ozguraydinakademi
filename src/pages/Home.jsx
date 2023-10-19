import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import IntroSlide from '../components/IntroSlide'
import p1 from '../assets/carousel/1.png'
import p2 from '../assets/carousel/2.png'


const slides = [
  {id: 1, text: "Deneme", backgroundImage: {p1}},
  {id: 2, text: "Deneme 2", backgroundImage: {p2}}
];

const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }

  return (
    <div className='h-[auto]'>

      <button onClick={changeSlide} className='hidden bg-slate-800 text-white p-2 m-5 rounded-2xl'>Slaytı Değiştir</button>
      <AnimatePresence mode='wait'>
        <motion.div key={slides[currentSlide].id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <IntroSlide text={slides[currentSlide].text} backgroundImage={slides[currentSlide].backgroundImage}/>
        </motion.div>

      </AnimatePresence>

    </div>
  )
}

export default Home
