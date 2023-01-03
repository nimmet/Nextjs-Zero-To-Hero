import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'


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
      <div className=" absolute top-0 z-10 md:right-[13%]">
      <Image src="/static/hero.png" width={700} height={400}
       />

</div>
       <Card  name="DarkHorse Coffee" imgUrl="/static/coffee1.jpg" 
       href="/coffee-store/darkhorse-coffee" />
      </main>

    </div>
  )
}


