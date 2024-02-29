import '@fontsource/poppins';

function Menu() {

  return (
    <>
    <div className="bg-amber-400 h-screen">
      <nav className="flex justify-evenly items-center py-5">
        <svg className="aspect-video" xmlns="http://www.w3.org/2000/svg" width="50" height="50" version="1.0" viewBox="0 0 232 195"><path d="M36.2 13.9c.3 1.2 2.2 1.8 8.1 2.2 8.1.7 11.7 2.3 13.9 6.1.9 1.7 1.4 10.5 1.8 32.3l.5 30 7.4.5 7.5.5L70 88c-7.1 3.3-16 9-24.2 15.6-3.7 3-6.9 5.4-7.2 5.4-.2 0 .8-3.7 2.4-8.3 1.5-4.5 2.6-8.6 2.3-9-.3-.5-1.7.3-3.2 1.7-2.9 2.8-6.9 3.4-8.9 1.4-.6-.6-1.5-.8-1.9-.4-1.6 1.6 3.1 3.8 7 3.3 3.5-.5 3.7-.4 3.1 1.6-2.2 7.1-4.9 13.2-8.4 18.5-5.6 8.7-11.4 11.1-18 7.7-1.7-.9-3-1.1-3-.6 0 2 4.6 4.1 8.9 4.1 4.7 0 5.6-.7 18.3-15.1 4.6-5.2 4.8-5.3 6.2-3.4 5.3 7.3 7.7 9.9 12.2 13 8.5 6 19.3 5.8 27.4-.4 3.9-3.1 1.6-3.5-2.8-.6-2.6 1.7-6 2.8-9.6 3.2-4.7.5-6.4.2-11-2.1-5.4-2.7-11.4-8.5-14.2-13.8-1.3-2.5-1.2-2.8 2.4-5.6 11.8-9.1 25.4-16.6 36.6-20.1 8.4-2.6 10.4-2.7 8.6-.6-1.1 1.3-.6 1.5 3.4 1.5 2.6 0 4.6.5 4.6 1.1 0 4.3-6.4 8.4-11.7 7.6-2.9-.5-3.3-.4-2.3.8.7.8 2.7 1.5 4.6 1.5 3.9 0 10.1-4.8 11-8.6.4-1.7 1.3-2.4 3-2.4 2.4 0 2.4-.1.8-2.6l-1.7-2.6 20.4-20.4c11.2-11.3 23.7-23.2 27.8-26.5 11.9-9.7 24.5-15.2 38.3-16.7 4.4-.5 6.4-1.1 6.6-2.2.2-1.4-3.8-1.5-32.8-1.6-30.2 0-33 .1-33 1.7 0 1.3 1.3 1.7 6.5 2.2 6.9.5 10.5 2.5 10.5 5.7 0 3.7-7.3 12.3-29.2 34.5C101.1 75.6 96.2 80 94 80c-1.5 0-4.9.7-7.6 1.5-2.7.8-5 1.5-5.1 1.5-.2 0-.3-12.3-.2-27.3 0-18 .5-28.5 1.2-31.2 1.6-5.2 5.7-7.5 15-8.4 5.3-.4 7.3-1 7.5-2.2.2-1.3-3.6-1.5-34.3-1.5-30.7 0-34.5.2-34.3 1.5z"/><path d="M110.5 115.7c-2.2 2-6 4.9-8.4 6.4-7.3 4.7-14 3.4-12.5-2.5.4-1.5.2-2.6-.4-2.6-.6 0-1.4 1.4-1.7 3.2-.6 2.6-.3 3.5 1.6 5.1 3.1 2.5 9.5 1.9 13.9-1.3l3.1-2.2 2 2.1c2.6 2.7 9.1 2.8 14.4.1 4.8-2.5 4.5-2.5 4.5.5 0 3.1 2.9 3.4 5.5.5 1.6-1.8 2-1.8 3.4-.6 3 2.7 6.7 2.9 11.7.6 2.7-1.1 5.5-2.7 6.4-3.4.8-.7 2.7-1.6 4.2-1.8 2.4-.5 2.7-.3 2.2 1.7-.8 3.4 1.8 4.9 7.6 4.2 2.7-.3 6.3-1.3 7.9-2.2 3-1.5 3.1-1.5 3.1.5 0 3.1 2.8 3.6 5.5 1 2.2-2 2.5-2.1 4-.7 3.4 3.5 9.5 2.9 15.8-1.5 4.8-3.4 2.9-3.8-3.2-.6-7.1 3.7-10.7 3.3-12.4-1.2-.6-1.7-1.4-3-1.8-3-.4 0-1.7 1.7-2.9 3.7-1.3 2.2-2.5 3.3-2.7 2.5-.7-1.8 2.2-5.9 4.7-6.7 1.1-.3 2-1.1 2-1.6 0-1.4-1.2-1.1-5.5 1.6-7.8 4.8-12.5 6.6-16.3 6.3-3.5-.3-3.7-.4-3.4-3.6.3-3.3.3-3.4-2.9-2.7-3 .7-3.1.6-2.5-1.8.3-1.5.1-2.9-.5-3.3-1.5-.9-4.1 2.6-3.6 4.8.6 2.1-1.7 4.2-6.7 6.3-5 2.1-8.2 1.3-10.2-2.7-1.6-3.1-1.7-3.2-3-1.3-.7 1.1-2 2.9-2.9 4-1.5 2-1.6 2-1.3-.5.2-1.4 1.6-3.3 3.6-4.6 5.3-3.6 2-3.7-3.9-.1-5.1 3-10.5 5.7-11.4 5.7-.3 0-.5-.8-.5-1.7 0-.9-1-2.7-2.1-4-1.8-1.9-2-2.5-.9-3.8 2.5-3 .5-2.3-3.5 1.2zm2.8 3.7c3.7 2.8 1.2 5.5-3.4 3.6-2.8-1.2-2.9-1.4-1.3-3.1 2-2.2 2.3-2.3 4.7-.5zM88 114c-.8.5-1.1 1.2-.7 1.6.4.4 1.5 0 2.4-.9 1.8-1.8.8-2.3-1.7-.7zM59.9 153.2c0 13-.4 21.5-1.2 23.7-1.9 5.4-5.5 7.4-14.4 8.1-6.4.4-7.8.8-8.1 2.3-.3 1.6 1.8 1.7 34.3 1.7s34.6-.1 34.3-1.7c-.3-1.5-1.7-1.9-8.1-2.3-8.9-.7-12.5-2.7-14.4-8.1-.8-2.2-1.2-10.7-1.2-23.7L81 133H60l-.1 20.2zM128.8 144.2c4.8 6.2 13 16.8 18.1 23.5 5.1 6.7 11.5 14.3 14.3 16.8l5 4.5h22c20.4 0 21.9-.1 21.6-1.7-.3-1.5-1.8-1.9-8.2-2.5-5.6-.5-8.9-1.4-11.9-3.2-7.9-4.7-20.8-18.5-36.1-38.4l-7.9-10.2H120l8.8 11.2z"/></svg>
        <ul className="flex flex-row gap-6 font-poppins">
            <li><a className="uppercase" href="https://www.google.com.co/">Home</a></li>
            <li><a className="uppercase" href="https://www.google.com.co/">Products</a></li>
            <li><a className="uppercase" href="https://www.google.com.co/">About</a></li>
            <li><a className="uppercase" href="https://www.google.com.co/">Contact me</a></li>
        </ul>
      </nav>
      <section className="flex justify-center items-center my-48">
        <svg className="mr-40" xmlns="http://www.w3.org/2000/svg" width="400" height="400" version="1.0" viewBox="0 0 232 195"><path d="M36.2 13.9c.3 1.2 2.2 1.8 8.1 2.2 8.1.7 11.7 2.3 13.9 6.1.9 1.7 1.4 10.5 1.8 32.3l.5 30 7.4.5 7.5.5L70 88c-7.1 3.3-16 9-24.2 15.6-3.7 3-6.9 5.4-7.2 5.4-.2 0 .8-3.7 2.4-8.3 1.5-4.5 2.6-8.6 2.3-9-.3-.5-1.7.3-3.2 1.7-2.9 2.8-6.9 3.4-8.9 1.4-.6-.6-1.5-.8-1.9-.4-1.6 1.6 3.1 3.8 7 3.3 3.5-.5 3.7-.4 3.1 1.6-2.2 7.1-4.9 13.2-8.4 18.5-5.6 8.7-11.4 11.1-18 7.7-1.7-.9-3-1.1-3-.6 0 2 4.6 4.1 8.9 4.1 4.7 0 5.6-.7 18.3-15.1 4.6-5.2 4.8-5.3 6.2-3.4 5.3 7.3 7.7 9.9 12.2 13 8.5 6 19.3 5.8 27.4-.4 3.9-3.1 1.6-3.5-2.8-.6-2.6 1.7-6 2.8-9.6 3.2-4.7.5-6.4.2-11-2.1-5.4-2.7-11.4-8.5-14.2-13.8-1.3-2.5-1.2-2.8 2.4-5.6 11.8-9.1 25.4-16.6 36.6-20.1 8.4-2.6 10.4-2.7 8.6-.6-1.1 1.3-.6 1.5 3.4 1.5 2.6 0 4.6.5 4.6 1.1 0 4.3-6.4 8.4-11.7 7.6-2.9-.5-3.3-.4-2.3.8.7.8 2.7 1.5 4.6 1.5 3.9 0 10.1-4.8 11-8.6.4-1.7 1.3-2.4 3-2.4 2.4 0 2.4-.1.8-2.6l-1.7-2.6 20.4-20.4c11.2-11.3 23.7-23.2 27.8-26.5 11.9-9.7 24.5-15.2 38.3-16.7 4.4-.5 6.4-1.1 6.6-2.2.2-1.4-3.8-1.5-32.8-1.6-30.2 0-33 .1-33 1.7 0 1.3 1.3 1.7 6.5 2.2 6.9.5 10.5 2.5 10.5 5.7 0 3.7-7.3 12.3-29.2 34.5C101.1 75.6 96.2 80 94 80c-1.5 0-4.9.7-7.6 1.5-2.7.8-5 1.5-5.1 1.5-.2 0-.3-12.3-.2-27.3 0-18 .5-28.5 1.2-31.2 1.6-5.2 5.7-7.5 15-8.4 5.3-.4 7.3-1 7.5-2.2.2-1.3-3.6-1.5-34.3-1.5-30.7 0-34.5.2-34.3 1.5z"/><path d="M110.5 115.7c-2.2 2-6 4.9-8.4 6.4-7.3 4.7-14 3.4-12.5-2.5.4-1.5.2-2.6-.4-2.6-.6 0-1.4 1.4-1.7 3.2-.6 2.6-.3 3.5 1.6 5.1 3.1 2.5 9.5 1.9 13.9-1.3l3.1-2.2 2 2.1c2.6 2.7 9.1 2.8 14.4.1 4.8-2.5 4.5-2.5 4.5.5 0 3.1 2.9 3.4 5.5.5 1.6-1.8 2-1.8 3.4-.6 3 2.7 6.7 2.9 11.7.6 2.7-1.1 5.5-2.7 6.4-3.4.8-.7 2.7-1.6 4.2-1.8 2.4-.5 2.7-.3 2.2 1.7-.8 3.4 1.8 4.9 7.6 4.2 2.7-.3 6.3-1.3 7.9-2.2 3-1.5 3.1-1.5 3.1.5 0 3.1 2.8 3.6 5.5 1 2.2-2 2.5-2.1 4-.7 3.4 3.5 9.5 2.9 15.8-1.5 4.8-3.4 2.9-3.8-3.2-.6-7.1 3.7-10.7 3.3-12.4-1.2-.6-1.7-1.4-3-1.8-3-.4 0-1.7 1.7-2.9 3.7-1.3 2.2-2.5 3.3-2.7 2.5-.7-1.8 2.2-5.9 4.7-6.7 1.1-.3 2-1.1 2-1.6 0-1.4-1.2-1.1-5.5 1.6-7.8 4.8-12.5 6.6-16.3 6.3-3.5-.3-3.7-.4-3.4-3.6.3-3.3.3-3.4-2.9-2.7-3 .7-3.1.6-2.5-1.8.3-1.5.1-2.9-.5-3.3-1.5-.9-4.1 2.6-3.6 4.8.6 2.1-1.7 4.2-6.7 6.3-5 2.1-8.2 1.3-10.2-2.7-1.6-3.1-1.7-3.2-3-1.3-.7 1.1-2 2.9-2.9 4-1.5 2-1.6 2-1.3-.5.2-1.4 1.6-3.3 3.6-4.6 5.3-3.6 2-3.7-3.9-.1-5.1 3-10.5 5.7-11.4 5.7-.3 0-.5-.8-.5-1.7 0-.9-1-2.7-2.1-4-1.8-1.9-2-2.5-.9-3.8 2.5-3 .5-2.3-3.5 1.2zm2.8 3.7c3.7 2.8 1.2 5.5-3.4 3.6-2.8-1.2-2.9-1.4-1.3-3.1 2-2.2 2.3-2.3 4.7-.5zM88 114c-.8.5-1.1 1.2-.7 1.6.4.4 1.5 0 2.4-.9 1.8-1.8.8-2.3-1.7-.7zM59.9 153.2c0 13-.4 21.5-1.2 23.7-1.9 5.4-5.5 7.4-14.4 8.1-6.4.4-7.8.8-8.1 2.3-.3 1.6 1.8 1.7 34.3 1.7s34.6-.1 34.3-1.7c-.3-1.5-1.7-1.9-8.1-2.3-8.9-.7-12.5-2.7-14.4-8.1-.8-2.2-1.2-10.7-1.2-23.7L81 133H60l-.1 20.2zM128.8 144.2c4.8 6.2 13 16.8 18.1 23.5 5.1 6.7 11.5 14.3 14.3 16.8l5 4.5h22c20.4 0 21.9-.1 21.6-1.7-.3-1.5-1.8-1.9-8.2-2.5-5.6-.5-8.9-1.4-11.9-3.2-7.9-4.7-20.8-18.5-36.1-38.4l-7.9-10.2H120l8.8 11.2z"/></svg>
        <div>
          <article className="uppercase font-poppins text-6xl w-28 font-bold border-l-8 border-black pl-6 mr-40">new collection 2024</article>
          <div className='font-poppins mt-4 w-96 ml-8'>Descubre la coleccion de pijamas que tenemos para ti y los super descuentos que todavia puedes aprovechar</div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Menu