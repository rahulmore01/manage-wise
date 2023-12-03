"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showVerticalMenu, setShowVerticalMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null); // Initialize as null

  const handleMenuClick = () => {
    setShowVerticalMenu(!showVerticalMenu);
  };

  useEffect(() => {
    // Use useEffect to access window.innerWidth on the client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      // Update the window width when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isMobile = windowWidth && windowWidth < 1200;

  return (
    <div>
      <div className="backdrop-blur-xl fixed flex w-screen px-6 lg:px-20 justify-between items-center py-4 bg-bg_color  z-50">
        <Image src="/assets/ManageWise.png" alt="me" width={150} height={60} />

        <ul className=" flex gap-12 text-text text-sm font-medium  vvs:hidden md:ml-0 lg:block md:space-x-6  lg:space-x-10 lg:pl-16">
          <Link className="hover:text-secondary__color" href="/Features">
            Features
          </Link>
          <Link className="md:hover:text-secondary__color" href="/FAQ">
            FAQ
          </Link>
          <Link className="md:hover:text-secondary__color" href="/Pricing">
            Pricing
          </Link>
          <Link className="md:hover:text-secondary__color" href="/Testimonials">
            Testimonials
          </Link>
        </ul>
        <div className=" flex justify-center items-center gap-4">
          {isMobile ? (
            <div className="menu-icon" onClick={handleMenuClick}>
              {showVerticalMenu ? (
                <IoClose className="text-text w-6 h-6 cursor-pointer" />
              ) : (
                <FiMenu className="text-text w-6 h-6 cursor-pointer" />
              )}
            </div>
          ) : (
            <Link
              href="/letstalk"
              className="bg-white text-text text-[14px] font-semibold capitalize w-[140px] py-2 text-center rounded-xl border border-orange-100"
            >
              Buy Template
            </Link>
          )}
        </div>
      </div>

      {showVerticalMenu && isMobile && (
        // {showVerticalMenu && isMobile && (
        <div className="bg-white h-[100vh] w-screen fixed  mt-[76px] vvs:z-10">
          <ul className=" flex flex-col justify-center items-center gap-8 text-text text-sm pt-10 md: px-4">
            <Link className="md:hover:text-secondary__color" href="/Features">
              Features
            </Link>
            <Link className="md:hover:text-secondary__color" href="/FAQ">
              FAQ
            </Link>
            <Link className="md:hover:text-secondary__color" href="/Pricing">
              Pricing
            </Link>
            <Link
              className="md:hover:text-secondary__color"
              href="/Testimonials"
            >
              Testimonials
            </Link>
            <button className="bg-secondary__color text-white text-[14px] font-semibold capitalize w-[140px] py-2 text-center rounded-xl border border-orange-100">
              Buy Template
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
