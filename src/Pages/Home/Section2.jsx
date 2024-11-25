import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img2.png'

const Section2 = () => {
  return (
    <div className='container py-[50px]'>
      <div className='flex  items-center justify-between'>
        <div className='flex flex-col items-start gap-[13px]'>
          <h1 className='text-[53px] text-gray-600 font-semibold'>HI it is company of shoping !</h1>
          <p className='text-gray-600 text-[34px]'>You want see our products? <br /> Go to shoping Page!</p>
          <Link to={'/products'}>
          <button className='px-7 py-2 bg-[#191b25] text-white rounded-md'>GOOOO</button>
          </Link>
          
        </div>
       <img width={570} src={img} alt="" />
       
      </div>
    </div>
  )
}

export default Section2
