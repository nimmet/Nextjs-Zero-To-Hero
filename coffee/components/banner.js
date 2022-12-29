import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Banner = (props) => {
  return (
    <div className=' flex flex-col gap-5 justify-start items-start'>
       
        <h1><span className=' text-white text-5xl font-bold'>Coffee</span><span className=' text-blue-800 text-5xl font-bold ml-4'>Connoisseur</span></h1>
        <p className=' text-slate-500 text-lg font-bold '>Discover you local Coffee shops!</p>
        <button className=' bg-blue-800/95 py-2 px-4 text-white hoverButton font-[600]'
        onClick={props.handleOnclick}>{props.buttonText}</button>
    </div>
  )
}

export default Banner