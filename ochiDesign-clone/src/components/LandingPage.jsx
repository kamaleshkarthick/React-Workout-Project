// eslint-disable-next-line no-unused-vars
import React from "react";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion";

const LandingPage = () => {
  motion
  return (
    <>
      <div  data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-[1px] ">
        <div className="textstructure pt-56 pb-24 px-20 ">
          {["We create", "Eye-Opening", "Presentations"].map((item, i) => {
            return (

              <div className="masker  " key={i}  >
                <div className=" w-fit flex items-end overflow-hidden ">
                  {i === 1 && (
                    <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1]}} className=" mr-5 w-[8vw] rounded-md h-[5.4vw] bottom-3 relative bg-green-500"></motion.div>
                    )}
                <h1 className=" pt-[2vw] -mb-[1vw]  uppercase text-[8vw] leading-[.75]  font-FoundersGrotesk  font-semibold ">
                  {item}
                </h1>
                </div>
              </div>
            );
          })}
          
        </div>
        <div className="  text-xl  border-t-[1px] border-zinc-700 flex justify-between items-center py-4 px-12 font-NeueMontreal">
          {["For public and private companies", "From the first pitch to IPO"].map((item, i) => (
            <p key={i} className=" text-md font-light ">{ item}</p>  
          ))}
          <div className="start flex items-center gap-3">
            <div className=" uppercase px-6 py-2 font-nomal border border-slate-400 rounded-full">start the project</div>
            <div className=" w-10 h-10 flex justify-center items-center border border-slate-400 rounded-full"> <ArrowUpRightIcon className="w-5 h-5 text-white"/> </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LandingPage;
