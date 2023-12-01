import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Data Analysis", "Website Development", "Software Development"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO OUR WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, We are<span className="text-designColor capitalize"> Nomels</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          We do <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Nomels is your gateway to cutting-edge IT solutions that redefine the way businesses engage online. We specialize in crafting bespoke digital experiences that resonate with your audience, drive growth, and unlock unparalleled opportunities in the digital sphere.
        </p>
      </div>
    </div>
  );
}

export default LeftBanner