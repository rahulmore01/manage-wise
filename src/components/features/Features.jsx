import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className=" h-auto w-full bg-white flex justify-center items-center flex-col px-4">
      <div className="flex justify-center items-center flex-col">
        <h3 className="urbanist text-secondary__color bg-white px-2 py-[1px] uppercase border rounded-[8px] mt-[160px] mb-5 text-[12px] tracking-wider">
          <span className="text-[20px]"> 🔥 </span>
          Premier features
        </h3>

        <h1 className="text-[36px] text-text text-center leading-[42px] mb-6 lg:text-[56px] lg:leading-[60px]">
          Discover our product's
          <span className="text-primary_color"> Capabilities </span>
        </h1>
        <p className="text-[18px] text-para text-center mb-8 lg:text-[20px] lg:px-[350px]">
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </p>
      </div>
      {/* card */}
      {/* main card wrapper */}
      <div className="flex flex-col justify-center items-center gap:4 lg:gap-10 lg:flex-row lg:px-0">
        <div className="bg-cardbg_color pt-[60px] pb-8 px-8 mb-10 lg:mb-0 rounded-3xl lg:w-[500px]">
          <span className="text-[20px] p-2 bg-white rounded-xl ">⭐️</span>

          <p className="text-[28px] leading-[32px] mt-4 lg:text-[42px] lg:leading-[48px] lg:pb-5">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </p>
        </div>

        {/* image card */}
        <div className="border border-gray-200 rounded-3xl ">
          <Image
            src="/assets/feature-card.png"
            height={460}
            width={300}
            className="
          object-cover object-center w-full h-full py-8"
          ></Image>
          <div className="px-8">
            <h3 className="text-[22px] font-semibold text-text leading-7 mb-3">
              Smart Task Management
            </h3>
            <p className="text-[16px] text-para pb-4">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
      </div>
      {/* image card */}
      {/* sub card wrapper */}
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-6  lg:flex-row lg:mt-14 lg:px-[120px] lg:mb-20">
        <div className="border border-gray-200 rounded-3xl mt-10 lg:mt-0 lg:min-w-[300px]">
          <Image
            src="/assets/feature-card2.png"
            height={460}
            width={300}
            className="
          object-cover object-center w-full h-full py-8"
          ></Image>
          <div className="px-8">
            <h3 className="text-[22px] font-semibold text-text leading-7 mb-3">
              Flexible Scheduling
            </h3>
            <p className="text-[16px] text-para pb-6">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-3xl mt-10 lg:mt-0 lg:min-w-[300px]">
          <Image
            src="/assets/feature-card3.png"
            height={460}
            width={300}
            className="
          object-cover object-center w-full h-full py-8"
          ></Image>
          <div className="px-8">
            <h3 className="text-[22px] font-semibold text-text leading-7 mb-3">
              Easy Communiaciton
            </h3>
            <p className="text-[16px] text-para pb-6">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-3xl mt-10 mb-20 lg:mt-0 lg:mb-0 lg:min-w-[300px]">
          <Image
            src="/assets/feature-card4.png"
            height={460}
            width={300}
            className="
          object-cover object-center w-full h-full py-8"
          ></Image>
          <div className="px-8">
            <h3 className="text-[22px] font-semibold text-text leading-7 mb-3">
              Analytics
            </h3>
            <p className="text-[16px] text-para pb-6">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
