import IntroSection from "../components/IntroSection"
import FeatureSection from "../components/FeatureSection"
import FeedBacksSection from "../components/FeedBacksSection"
import ContactSection from "../components/ContactSection"


const Home = () => {

  return (
    <div className='h-[auto] pt-10'>
      <IntroSection/>
      <FeatureSection/>
      <FeedBacksSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
