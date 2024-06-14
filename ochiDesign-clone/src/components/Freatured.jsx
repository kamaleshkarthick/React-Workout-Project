/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

const Freatured = () => {
  const [ishover, setHover] = useState(false);
  // console.log(useState());

  return (
    <>
      <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
          <h1 className=" text-8xl font-NeueMontreal tracking-tight">
            Featured projects
          </h1>
        </div>
        <div className=" px-20">
          <div className=" card w-full flex gap-10 mt-10">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className=" cardcontainer relative w-1/2 h-[75vh] "
            >
              <h1 className="  flex absolute font-NeueMontreal text-8xl text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  overflow-hidden z-10">
                {"FYDE".split("").map((item, i) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={ishover ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: Power4.easeInOut, delay: i * 0.1 }}
                    className=" inline-block "
                    key={i}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className=" card w-full h-full rounded-xl  overflow-hidden">
                <img
                  className=" w-full h-full bg-cover "
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt="img"
                />
              </div>
            </div>

            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className=" cardcontainer relative w-1/2 h-[75vh] "
            >
              <div className=" card w-full h-full rounded-xl overflow-hidden ">
                <h1 className="  flex absolute font-NeueMontreal text-8xl text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden z-10">
                  {"VIDE".split("").map((item, i) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={ishover ? { y: "0" } : { y: "100%" }}
                      transition={{ ease: Power4.easeInOut, delay: i * 0.1 }}
                      className=" inline-block "
                      key={i}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  className=" w-full h-full bg-cover "
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freatured;
