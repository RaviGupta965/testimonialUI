import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

function Card(props) {
    let review=props.review
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-4rem] z-[10] mx-auto'>
        <img className='aspect-square rounded-full w-[100px] h-[100px] z-[25]' src={review.image} alt="" />
        <div className='h-[100px] w-[100px] absolute rounded-full z-[-25] top-[-6px] left-[8px] bg-violet-600'></div>
      </div>

      <div className='text-center m-2'>
        <p className='font-bold text-2xl capitalize'>
            {review.name}
        </p>
      </div>

      <div className='text-center m-2'>
        <p className='text-violet-300 uppercase text-sm'>
            {review.job}
        </p>
      </div>

      <div className='mx-auto text-violet-400'>
        <FaQuoteLeft/>
      </div>

      <div className=' text-slate-400 m-4 text-center'>
        {review.text}
      </div>

      <div className='mx-auto text-violet-400'>
        <FaQuoteRight/>
      </div>
    </div>
  )
}

export default Card
