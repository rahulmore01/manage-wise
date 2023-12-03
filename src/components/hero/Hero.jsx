import Image from "next/image";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-bg_color flex justify-center items-center flex-col px-4 md:px-40">
      <h3 className="urbanist text-secondary__color bg-white px-2 py-[1px] uppercase border rounded-[8px] mt-[160px] mb-5 text-[12px] tracking-wider">
        <span className="text-[20px]">👋 </span>
        welcome to manage wise!
      </h3>
      <div className="urbanist  text-center text-[48px] font-[400] leading-[50px] mb-8 lg:text-[84px] lg:leading-[85px]">
        Empower your business with
        <span className="text-primary_color"> Strategic </span>
        insights
      </div>
      <p className="text-para text-[18px] text-center mb-8 lg:text-[20px] lg:px-[200px]">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </p>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-6 md:flex-row ">
          <button className="urbanist bg-secondary__color text-white text-[20px] font-medium capitalize min-w-[200px] py-3 text-center rounded-xl ">
            Get Started
          </button>
          <button className="urbanist bg-white text-text text-[20px] font-medium capitalize min-w-[200px] py-3 text-center rounded-xl border border-orange-100 flex justify-center items-center gap-2">
            Watch Demo
            <FaPlayCircle />
          </button>
        </div>
        <Image
          src="/assets/hero-img.jpg"
          width={280}
          height={280}
          className="mt-20 md:min-w-[760px] md:h-[auto] lg:min-w-[1100px] rounded-xl border border-orange-200 shadow-2xl mb-4"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
