// eslint-disable-next-line no-unused-vars
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 ">
        <div className="textstructure pt-72 pb-80 px-20">
          {["We create", "Eye-Opening", "Presentations"].map((item, i) => {
            return (
              <div className="masker" key={i}>
                <h1 className=" uppercase text-9xl leading-[.9] font-FoundersGrotesk  font-semibold">
                  {item}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
