import React from 'react'

const Banner = () => {
  return (
    <div className=' flex flex-col gap-5 items-start'>
        <h1><span className=' text-white text-5xl font-bold'>Coffee</span><span className=' text-blue-800 text-5xl font-bold ml-4'>Connoisseur</span></h1>
        <p className=' text-white text-xl font-bold'>Discover you local Coffee shops!</p>
        <button className=' bg-blue-800/95 py-3 px-7 text-white '>View stores nearby</button>
    </div>
  )
}

export default Banner