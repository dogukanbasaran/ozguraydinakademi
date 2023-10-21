import IntroSlide from "../components/IntroSlide"
import WhyChooseUs from "../components/WhyChooseUs"
import Instructor from "../components/Instructor"

const Home = () => {

  return (
    <div className='h-[auto] pt-10'>
      <IntroSlide/>
      <WhyChooseUs/>
      <Instructor/>
    </div>
  )
}

export default Home
