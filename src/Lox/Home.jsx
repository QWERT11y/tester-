import {React, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [burger, setBurger] = useState(false);
  return (
    <div className= 'container overflow-x-hidden bg-[#222224] py-[30px] flex flex-row justify-between items-center text-white gap-7'>
        <header className='flex flex-row justify-between items-center text-white  gap-[1000px]'>
          <div className='flex justify-between items-center'>
            <Link to={'/home'}>

            <h1 className=' text-[30px]'>Pro_Products</h1>
            </Link>
          </div>
            <button className=' text-[30px]' onClick={() => setBurger(true)}><i className="fa-solid fa-bars-progress"></i></button>
            {burger && (
        <div className="relative ">
          <div className=" text-white bg-[#0a0c16] w-[350px] duration-300 fixed right-0 top-0 flex flex-col items-center justify-center p-[40px] z-20  h-[100vh]">
            <ul className="flex items-center flex-col gap-7 cursor-pointer">
              <li>Contact</li>
              <li>Nmadir</li>
              <li>Eshmat</li>
              <li>Toshmat</li>
            </ul>
            <div className="flex items-center gap-2">
              

              <button
                onClick={() => setBurger(false)}
                className="absolute text-[20px] top-0 right-1 px-7 py-3 flex items-center justify-center"
              >
                x
              </button>
            </div>
          </div>
        </div>
      )}
        </header>
         
    </div>
  )
}

export default Home