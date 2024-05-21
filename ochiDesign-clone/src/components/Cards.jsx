// eslint-disable-next-line no-unused-vars
import React from "react";

const cards = () => {
  return (
    <>
      <div className=" w-full h-screen bg-zinc-700 flex gap-5 items-center px-32 ">
        <div className="Cardcontainer w-1/2 h-[50vh]">
          <div className=" relative w-full h-full rounded-xl bg-[#004d43] flex items-center justify-center">
            <img
              className=" w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=" logo"
            />
            <button className=" absolute px-5 py-1 rounded-full border-2 b left-10 bottom-10">
              &copy;2019-2023
            </button>
          </div>
        </div>
        <div className="Cardcontainer w-1/2 h-[50vh] flex gap-5">
          <div className=" relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]">
            <img
              className=" w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=" logo"
            />
            <button className=" absolute px-5 py-1 rounded-full border-2 b left-10 bottom-10">
              &copy;2019-2023
            </button>
          </div>
          <div className=" relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]">
            <img
              className=" w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=" logo"
            />
            <button className=" absolute px-5 py-1 rounded-full border-2 b left-10 bottom-10">
              &copy;2019-2023
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default cards;
