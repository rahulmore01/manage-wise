import React from "react";
import FaqSection from "./FaqSection";

const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center  px-4  h-auto w-full lg:flex-row lg:items-start lg:justify-between lg:mt-[100px] lg:px-[120px]">
      <div className="flex justify-center items-center flex-col px-4  h-auto w-full lg:items-start lg:max-w-[500px]">
        <h3 className="text-secondary__color bg-white px-4 py-2 uppercase mt-[120px] mb-5 text-[12px] text-start border rounded-[8px] lg:mt-4">
          <span className="text-[20px]"> 🙋🏻‍♀️ </span>
          FAQ
        </h3>

        <h1 className=" font-semibold text-[36px] leading-[38px] text-center mb-6 px-20 lg:px-0 lg:text-[56px] lg:leading-[60px]">
          Need
          <span className=" text-primary_color "> Answers ?</span>
        </h1>
        <p className="text-[18px] text-center text-para mb-10 lg:max-w-[300px] lg:text-start lg:text-[20px] ">
          Check out our most commonly asked questions below to find the
          information you need.
        </p>
      </div>
      {/* faq section - used a librery */}
      <div>
        <FaqSection />
      </div>
    </div>
  );
};

export default Faq;
