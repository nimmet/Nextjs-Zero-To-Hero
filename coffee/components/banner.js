import React from 'react'

const Banner = (props) => {
  return (
    <div className=' flex flex-col gap-5 justify-center items-start'>
        <h1><span className=' text-white text-3xl font-bold'>Coffee</span><span className=' text-blue-800 text-3xl font-bold ml-4'>Connoisseur</span></h1>
        <p className=' text-slate-700 text-xl font-bold'>Discover you local Coffee shops!</p>
        <button className=' bg-blue-800/95 py-2 px-4 text-white hoverButton'
        onClick={props.handleOnclick}>{props.buttonText}</button>
    </div>
  )
}

export default Banner