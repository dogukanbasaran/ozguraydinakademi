import IntroSection from "../components/IntroSection"
import FeatureSection from "../components/FeatureSection"
import FeedBacksSection from "../components/FeedBacksSection"


const Home = () => {

  return (
    <div className='h-[auto] pt-10'>
      <IntroSection/>
      <FeatureSection/>
      <FeedBacksSection/>
    </div>
  )
}

export default Home
