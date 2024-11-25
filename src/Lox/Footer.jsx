import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=' container bg-[#222224] flex items-center h-[300px] justify-between '>
        <h1 className='text-white text-[40px]'>footer</h1>
        <div className='flex flex-row gap-[70px]'>

        <ul className='flex flex-col gap-[14px] text-[20px]  text-white'>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
      
        </ul>
        <ul className='flex flex-col gap-[14px] text-[20px]  text-white'>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
