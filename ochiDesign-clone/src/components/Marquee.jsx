// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      {/* <div className="bg-[#a3ff9b]"> */}
      <div data-scroll data-scroll-section data-scroll-speed=".02" className="  w-full  rounded-tl-3xl rounded-tr-3xl py-10 bg-[#004D43]  ">
        <div className="text border-t-2 border-b-2 border-white flex  overflow-hidden whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="text-[17vw] leading-none font-FoundersGrotesk font-semibold uppercase pt-10 -mb-20 pr-10"
          >
            We are Ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="text-[17vw] leading-none font-FoundersGrotesk font-semibold uppercase pt-10 -mb-20 pr-10"
          >
            We are Ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
            className="text-[17vw] leading-none font-FoundersGrotesk font-semibold uppercase pt-10 -mb-20 pr-10"
          >
            We are Ochi
          </motion.h1>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Marquee;
