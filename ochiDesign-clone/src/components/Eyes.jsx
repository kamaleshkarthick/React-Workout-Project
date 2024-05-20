// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // console.log(e.clientX);
      let mouseX = e.clientX;
      let MouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = MouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  },[rotate]);
  return (
    <>
      <div className="eyes w-full h-screen overflow-hidden">
        <div className=' relative w-full h-full bg-cover  bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
          <div className="  flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
            <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
              <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className=" line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full "
                >
                  <div className=" w-10 h-10 rounded-full bg-zinc-200"></div>
                </div>
              </div>
            </div>

            <div className="  flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
              <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className=" line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full "
                >
                  <div className=" w-10 h-10 rounded-full bg-zinc-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
