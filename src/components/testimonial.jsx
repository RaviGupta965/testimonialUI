import React, { useState } from 'react'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import Card from './Card';
function Testimonial(props) {
    let reviews=props.reviews;
    let data=[];
    reviews.forEach(element => {
      data.push(element);
    });
    let [curr,setcurr]=useState(0);
    const lefthandler=()=>{
      if(curr==0){
        setcurr(data.length-1);
      }
      else{
        setcurr(curr-1);
      }
    }
    const righthandler=()=>{
      if(curr==data.length-1){
        setcurr(0);
      }
      else{
        setcurr(curr+1);
      }
    }
    const Surprisehandler=()=>{
      let newindex=Math.floor(Math.random()*data.length);
      setcurr(newindex);
    }
  return (
    <div>
      <Card review={reviews[curr]}/>
      <div className='flex justify-center'>
        <button onClick={lefthandler} className='flex text-3xl mt-5 gap-3 text-violet-400'>
            <FiChevronLeft/>
        </button>
        <button  onClick={righthandler} className='flex text-3xl mt-5 gap-3 text-violet-400'>
            <FiChevronRight/>
        </button>
      </div>
      <div className='flex justify-center'>
        <button onClick={Surprisehandler} className='bg-violet-500 px-5 hover:bg-violet-700 transition-all duration-150 p-1 rounded-md m-2 border-2 font-bold text-white border-purple-900'>Surprise me</button>
      </div>
    </div>
  )
}

export default Testimonial
