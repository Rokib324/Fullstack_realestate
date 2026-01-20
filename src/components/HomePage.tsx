import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'

const HomePage = () => {
  return (
    <div className='w-full h-screen flex'>
        {/* Left Side */}
        <div className='flex-3/5'>
        <div className='pr-25 flex flex-col justify-center gap-12 h-full'>
        <h1 className='text-6xl font-bold text-gray-950'>Find Real Estate, Rent Flat, SubLet and Buy Home Appliances</h1>
        <p className='text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        <SearchBar />
        <div className='flex justify-between'>
            <div>
                <h1 className='text-4xl font-bold'>16+</h1>
                <h2 className='text-xl font-normal text-gray-600'>Years of Experience</h2>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>200</h1>
                <h2 className='text-xl font-normal text-gray-600'>Award Gained</h2>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>2000+</h1>
                <h2 className='text-xl font-normal text-gray-600'>Property Ready</h2>
            </div>
        </div>
        </div>
        </div>
        {/* Right Side */}
        <div className='flex-2/5 md:bg-[#fcf5f3] relative flex justify-center items-center'>
        <Image src="/bg.png" alt="Home Image" width={400} height={300} className='absolute min-w-[115%] right-0'></Image>
        </div>
    </div>
  )
}

export default HomePage