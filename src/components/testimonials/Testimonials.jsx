import React from "react";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <div className="bg-white flex justify-center items-start flex-col px-4  h-auto w-screen lg:w-screen lg:px-[120px]">
      <div>
        <h3 className="urbanist text-secondary__color bg-white px-4 py-2 uppercase  mb-4 text-[12px] text-start w-36 border border-purple-200 rounded-[8px] ">
          <span> 🧡 </span>
          Testimonials
        </h3>
        <h1 className="urbanist text-text font-semibold text-[36px] leading-[42px] lg:text-[56px] lg:leading-[60px]">
          Hear from our
          <span className=" text-primary_color"> Satisfied </span>
          clients
        </h1>
        <p className=" text-[18px] font-semibold text-para mt-4 mb-10 min-w-[300px] lg:mb-14 lg:w-[500px] lg:text-[20px] lg:leading-[24px]">
          Discover why our clients love working with us. Read their testimonials
          and learn how we has helped businesses.
        </p>
      </div>
      {/* slider */}
      <div className="mb-40 ">
        <Slider />
      </div>
    </div>
  );
};

export default Testimonials;
