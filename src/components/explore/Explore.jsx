import React from "react";
import { BsPhone } from "react-icons/bs";
import { FaBell } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import Image from "next/image";
const Explore = () => {
  return (
    <div className="bg-text flex justify-center items-center flex-col px-4  h-auto w-full lg:px-[120px]">
      <div>
        <h3 className="urbanist w-36 text-secondary__color bg-white px-2 py-[1px] uppercase border border-orange-200 rounded-[8px] mt-[160px] mb-5 text-[12px] tracking-wider lg:w-[140px]">
          <span className="text-[20px]"> 😍 </span>
          and more ...
        </h3>

        <h1 className=" urbanist text-white font-medium text-[36px] leading-[42px] mb-6  lg:text-[56px] lg:leading-[60px] ">
          Explore an array of features that elevate your
          <span className=" text-primary_color"> Productivity </span>
          to new heights
        </h1>
        <p className="text-[18px] text-para mb-20 lg:mb-14 lg:w-[500px] lg:text-[20px]">
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </p>
      </div>
      {/* black cards */}
      <div className="flex justify-center items-center flex-col gap-6 lg:flex-row lg:mb-10">
        <div className="bg-darkcardbg_color flex justify-center items-center flex-col  text-center px-7 py-16 rounded-3xl border border-gray-800">
          <FaBell className="text-white w-[80px] h-[80px] bg-secondary__color p-6 rounded-3xl mb-4" />

          <h1 className=" text-white font-semibold text-[22px] leading-[26px] mb-6">
            Cross-Platform Compatibility
          </h1>
          <p className="text-[16px] text-para ">
            Enjoy the flexibility of cross-platform compatibility. Our product
            works seamlessly across desktop, web, and mobile devices, allowing
            you to work from your preferred device.
          </p>
        </div>
        <div className="bg-darkcardbg_color flex justify-center items-center flex-col  text-center px-7 py-16 rounded-3xl border border-gray-800">
          <BsPhone className="text-white w-[80px] h-[80px] bg-secondary__color p-6 rounded-3xl mb-4" />
          <h1 className=" text-white font-semibold text-[22px] leading-[26px] mb-6">
            Cross-Platform Compatibility
          </h1>
          <p className="text-[16px] text-para ">
            Enjoy the flexibility of cross-platform compatibility. Our product
            works seamlessly across desktop, web, and mobile devices, allowing
            you to work from your preferred device.
          </p>
        </div>
        <div className="bg-darkcardbg_color flex justify-center items-center flex-col  text-center px-7 py-16 rounded-3xl border border-gray-800">
          <FaFire className="text-white w-[80px] h-[80px] bg-secondary__color p-6 rounded-3xl mb-4" />
          <h1 className=" text-white font-semibold text-[22px] leading-[26px] mb-6">
            Cross-Platform Compatibility
          </h1>
          <p className="text-[16px] text-para ">
            Enjoy the flexibility of cross-platform compatibility. Our product
            works seamlessly across desktop, web, and mobile devices, allowing
            you to work from your preferred device.
          </p>
        </div>
      </div>
      {/* logos */}
      <div className="flex flex-wrap gap-3 justify-center items-center mt-32 mb-6 lg:hidden">
        <Image
          src="/logos/gmail.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>

        <Image
          src="/logos/dropbox.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>
        <Image
          src="/logos/gmail.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>

        <Image
          src="/logos/figma.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>
        <Image
          src="/logos/fire.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>

        <Image
          src="/logos/framer.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>
        <Image
          src="/logos/zoom.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>

        <Image
          src="/logos/notion.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>
        <Image
          src="/logos/trello.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>

        <Image
          src="/logos/dropbox.png"
          height={90}
          width={90}
          className="bg-darkcardbg_color p-6 rounded-2xl"
        ></Image>
      </div>
    </div>
  );
};

export default Explore;
