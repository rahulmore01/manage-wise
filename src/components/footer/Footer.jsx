import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center ">
      <div className="flex justify-center items-center flex-col  lg:rounded-3xl lg:border lg:border-orange-100 lg:flex-row lg:px[120px] lg:shadow-xl ">
        <div className="flex justify-center items-center flex-col px-4 lg:pl-[80px] lg:pt-[80px] lg:pb-0 lg:max-w-[600px] lg:items-start ">
          <h3 className="text-secondary__color bg-white px-4 py-2 uppercase  mb-4 text-[12px]  w-40 border border-purple-200 rounded-[8px]">
            <span> 👋 </span>
            Don't miss out
          </h3>
          <h1 className="urbanist text-text font-semibold text-[36px] leading-[42px] lg:text-start">
            Unleash your
            <span className=" text-primary_color"> Potential </span>
            with us
          </h1>
          <p className="text-[18px] text-para mt-4 mb-6 lg:text-start">
            Discover why our clients love working with us. Read their
            testimonials and learn how we has .
          </p>
          <button className="bg-secondary__color rounded-2xl px-12 py-3 text-white font-semibold mb-28">
            Try out now
          </button>
        </div>

        {/* <Image
          className="lg:pr-[80px] "
          src="/assets/faces.png"
          width={600}
          height={400}
        ></Image> */}
        <div className="relative">
          <Image
            className="lg:pr-[80px] "
            src="/assets/faces.png"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white opacity-80"></div>
        </div>
      </div>
      {/* footer */}
      <div className="w-full bg-bg_color flex flex-col items-center justify-center pt-28  lg:pt-10 lg:w-full lg:mt-4 lg:px-[120px]">
        <div className="bg-bg_color flex flex-col items-center justify-center pt-28  lg:pt-10 lg:w-full lg:mt-4 lg:flex-row lg:justify-between lg:items-start">
          <Image src="/assets/ManageWise.png" width={160} height={100}></Image>
          <ul className=" flex flex-col items-center justify-center gap-2 mt-10 lg:items-start lg:mt-0">
            <li>Features</li>
            <li>FAQ</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <span className="w-[280px] h-[1px] bg-orange-200 mt-8 lg:w-full "></span>
        <div className="text-center mt-4 lg:flex lg:justify-between lg:items-center lg:w-full ">
          <p>2022 ManageWise, Inc.</p>
          <div className="text-text flex justify-center items-center gap-4 pt-6 pb-10">
            <AiFillInstagram className="text-[28px]" />
            <FaSquareXTwitter className="text-[28px]" />
            <IoLogoLinkedin className="text-[28px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
