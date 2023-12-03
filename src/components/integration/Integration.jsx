import Image from "next/image";
import React from "react";

const Integration = () => {
  return (
    <div className="bg-text flex justify-center items-center flex-col px-4  h-auto w-full">
      <h3 className="urbanist text-secondary__color bg-white px-2 py-[1px] uppercase border rounded-[8px] mt-[160px] mb-5 text-[12px] tracking-wider">
        <span className="text-[20px]"> 🛠️ </span>
        integrations
      </h3>

      <h1 className=" text-white font-semibold text-[36px] leading-[42px] text-center mb-6 lg:px-[300px] lg:text-[56px] lg:leading-[60px] lg:mt-6">
        Enable
        <span className=" text-primary_color"> integration </span>
        with other popular tools and platform
      </h1>
      <p className="text-[18px] text-center text-para mb-10 lg:px-[400px] lg:text-[20px] ">
        Seamlessly connect and amplify your workflow by enabling integration
        with a diverse array of widely-used tools and platforms.
      </p>
      <Image
        src="/assets/integration.png"
        width={300}
        height={270}
        className="lg:min-w-[600px] lg:mt-6"
      ></Image>
    </div>
  );
};

export default Integration;
