import Head from 'next/head'
import Image from 'next/image'
import Coffee from './coffee'

export default function Home() {
  return (
    <div className=" italic text-green-800 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Coffee/>
      <main className="">
        <h1 className="">
        Coffee Store
        </h1>
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}
