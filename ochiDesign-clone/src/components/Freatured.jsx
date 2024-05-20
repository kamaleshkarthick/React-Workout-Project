/* eslint-disable no-unused-vars */
import React from "react";

const Freatured = () => {
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
            <div className=" cardcontainer relative w-1/2 h-[75vh] ">
              <h1 className=" absolute font-NeueMontreal text-8xl text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  overflow-hidden z-10">
                FYDE
              </h1>
              <div className=" card w-full h-full rounded-xl  overflow-hidden">
                <img
                  className=" w-full h-full bg-cover "
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt="img"
                />
              </div>
            </div>

            <div className=" cardcontainer relative w-1/2 h-[75vh] ">
              <div className=" card w-full h-full rounded-xl overflow-hidden ">
                <h1 className=" absolute font-NeueMontreal text-8xl text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden z-10">
                 VIDE
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
