import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import feedbacksData from '../data/feedback'

const FeedBackCard = () => {
  return (

    <div className='grid  px-10 py-5 sm:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-1 gap-5 lg:flex-row'>

        {feedbacksData.map((feedback) => {
            return (
                <div className='px-2 sm:mb-8 h-[250px] lg:w-[300px] xl:w-[300px] overflow-hidden rounded-md shadow-lg bg-gray-100 border-[0.5px] hover:scale-105 duration-300 cursor-pointer' key={feedback.id}>
                        <h4 className='font-semibold font-text text-[18px] pl-2 mb-2'>{feedback.name}</h4>
                        <p className='text-center font-text'>{feedback.feedback}</p>
                        <div className='flex justify-center mt-2'>
                            <AiFillStar className='text-[20px] text-yellow-500'/>
                            <AiFillStar className='text-[20px] text-yellow-500'/>
                            <AiFillStar className='text-[20px] text-yellow-500'/>
                            <AiFillStar className='text-[20px] text-yellow-500'/>
                            <AiFillStar className='text-[20px] text-yellow-500'/>
                        </div>
                </div>
            )
        })}
          


    </div>
  )
}

export default FeedBackCard
