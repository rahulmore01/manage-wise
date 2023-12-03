// components/TestimonialCarousel.js
import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    // <div id="" className="flex gap-6 overflow-hidden">
    <div
      id="testimonial-container"
      className=" flex gap-6 lg:overflow-x-scroll  w-[90vw] "
      // className=" flex gap-6 lg:overflow-hidden  w-[100vw] "
    >
      {/* <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]"> */}
      <div className="min-w-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl lg:h-[340px]  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user1.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>

      {/* Add more testimonial cards as needed */}
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user2.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user3.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user4.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user2.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user1.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user4.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user3.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user1.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user2.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user4.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user3.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 testi_card transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user1.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
      <div className="min-w-[340px] h-[340px] px-6 py-8 transform transition-transform duration-10000 ease-linear animate-scroll-and-rotate border border-gray-200 rounded-2xl  lg:w-[340px]">
        <p className="text-text text-[18px] text-start mb-6 ">
          "The customer support team behind this product is exceptional. They
          have been incredibly responsive and helpful, addressing any questions
          or concerns promptly."
        </p>
        <div className="flex items-center justify-start gap-4 pt-8">
          <Image
            className="rounded-full"
            src="/assets/user1.jpg"
            width={60}
            height={60}
          ></Image>
          <div className="flex items-start justify-start flex-col ">
            <h3 className="text-text">leon</h3>
            <p className="text-para">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
