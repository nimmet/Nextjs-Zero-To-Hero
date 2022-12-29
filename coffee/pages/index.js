import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'


export default function Home() {

  const handleOnBannerBtnClick = () => {


  }
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center">
       
        <Banner buttonText="View stores nearby" handleOnclick={handleOnBannerBtnClick}/>
      </main>

    </div>
  )
}


