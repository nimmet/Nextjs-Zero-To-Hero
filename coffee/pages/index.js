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

      <main className="flex flex-col justify-center mx-10 md:mx-24 md:my-24 my-16">
       
        <Banner buttonText="View stores nearby" handleOnclick={handleOnBannerBtnClick}/>
      <Image src="/static/hero.png" width={700} height={400}
       className=" absolute top-0 z-10 md:right-[13%]"/>
      </main>

    </div>
  )
}


