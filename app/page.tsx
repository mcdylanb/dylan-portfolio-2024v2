export default function Home() {
  return (
    <div className="bg-white h-screen w-screen px-20">
      {/* NAVIFATION */}
      <div className=" container w-full space-x-10 pt-10 justify-between grid grid-cols-2">
        <div className=""> </div>
        <ul className="flex flex-row justify-between px-5">
          <li className="font-bold">Blog</li>
          <li className="font-bold">Projects</li>
          <li className="font-bold">Contact</li>
        </ul>
      </div>
      {/* HERO */}
      <div className="container w-full h-full grid grid-cols-2 ">
        <div className="place-self-center justify-center">
          <h1 className="text-7xl">Hello I'm Dylan Balagtas</h1>
        </div>
        <div className="place-self-center justify-center">
          <h2 className="text-5xl ">
            Solution driven <br />
            Software Engineer
          </h2>
          <p className="pt-2">
            the passionate problem solver your company needs
          </p>
          <div className="flex justify-start pt-2">
            <div>
              <button className="bg-gray-800 hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-4 rounded-full border hover:border-gray-800 ">
                Contact me
              </button>
            </div>
            <div className="pl-7">
              <button className="border border-gray-800 hover:bg-gray-800 hover:text-white text-black font-bold py-2 px-4 rounded-full">
                See my work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
