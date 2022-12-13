
function MyApp({ Component, pageProps }) {
  return(
  <div className='flex flex-col justify-center items-center'>

   <Component {...pageProps} /> {" "}
   <footer className='
   max-w-screen-md absolute bottom-0 text-center'>
    <p>© 2022 Uyghur</p>
   </footer>
  </div>)
}

export default MyApp
