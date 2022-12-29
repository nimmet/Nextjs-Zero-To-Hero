import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'


export default function Home() {
  return (
    <div className=" ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-10">
        <h1 className="text-3xl font-bold">
        Coffee Connoisseur
        </h1>
        <Banner/>
      </main>

    </div>
  )
}


