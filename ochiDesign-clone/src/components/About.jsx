// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full p-20  bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black ">
        <h1 className=" font-NeueMontreal text-[4vw] leading-[5vw] tracking-tight">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
        <div className=" w-full  flex gap-5 pt-10 mt-20 border-t-[1px] border-[#9bae59] ">
          <div className=" w-1/2">
            <h1 className="text-7xl">Our Approach</h1>
            <button className=" flex gap-10 items-center uppercase px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl bg-green-200"></div>
        </div>
      </div>
    </>
  );
};

export default About;
