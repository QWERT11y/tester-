import React from 'react'
import bg from '../../assets/bg.png'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    <div className='container py-[100px] relative'>
      <div className='w-full bg-[#222224] h-[330px] rounded-[44px] flex justify-between items-center px-[200px]'>
       <div>
        <h1 className='text-[33px] text-white font-semibold'>why u need more cloth?</h1>
        <p className='text-[25px] text-[#aeaeaf] font-semibold' >Correct!  For hygiene!</p>
        <Link to={'/products'}>
        <button className='px-6 py-1 bg-[white] rounded-xl text-[22px] font-bold'>Buy!</button>
        </Link>
       </div>
       <img width={330} src={bg} alt="" />
      </div>
    </div>
  )
}

export default Section4
