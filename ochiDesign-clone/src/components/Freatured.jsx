/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
// import { Power4 } from "gsap/all";

const Freatured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (i) => {
    cards[i].start({y:"0"})
  }
  const handleHoverEnd = (i) => {
    cards[i].start({y:"100%"})
  }

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
            <motion.div onHoverStart={() => handleHover(0)}
              onHoverEnd={()=> handleHoverEnd(0)}
              className=" cardcontainer relative w-1/2 h-[75vh] " >
              <h1 className="  flex absolute font-NeueMontreal text-8xl text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  overflow-hidden z-10">
                {"FYDE".split("").map((item, i) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={ cards[0]}
                    transition={{ ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
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
            </motion.div>

            <motion.div onHoverStart={() => handleHover(1)}
              onHoverEnd={()=> handleHoverEnd(1)} className=" cardcontainer relative w-1/2 h-[75vh] " >
              <div className=" card w-full h-full rounded-xl overflow-hidden ">
                <h1 className="  flex absolute font-NeueMontreal text-8xl text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden z-10">
                  {"VIDE".split("").map((item, i) => (
                   <motion.span
                   initial={{ y: "100%" }}
                   animate={ cards[1]}
                   transition={{ ease: [0.25, 1, 0.5, 1], delay: i * 0.1 }}
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
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freatured;
