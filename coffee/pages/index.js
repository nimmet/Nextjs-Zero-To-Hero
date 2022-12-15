import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className=" bg-gradient-to-r from-green-300 via-orange-300 to-purple-400 max-h-screen">

   <h1 className=' text-lg italic text-green-600'>Hello Coffe</h1>
   <p className=' text-center font-bold'>Coffe Stores</p>
   </div>
   
  )
}
