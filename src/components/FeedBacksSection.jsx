import React from 'react'
import FeedBackCard from './FeedBackCard'

const FeedBacks = () => {
  return (
    <section>
        <div className='container mx-auto h-[auto] my-0 sm:px-10 py-10 bg-gray-100'>
          <h2 className='text-center text-[32px] md:text-[48px] font-heading font-semibold text-neutral-800 mb-10'>BİZE GELEN YORUMLAR</h2>

            <FeedBackCard/>

        </div>
    </section>
  )
}

export default FeedBacks
