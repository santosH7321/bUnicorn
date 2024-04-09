"use client";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "..//..//..//public/images/logoWhite.png";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-sky-500 w-full overflow-hidden" >
    <nav className="p-1">
      <div className="flex justify-around">
        <div className="pr-[150px]">
          <Link href="/">
            <Image src={logo} alt="Example" width={130} height={100} />
          </Link>
        </div>
        <div className="flex justify-around items-center gap-[90px]">
          <ul className="flex justify-center items-start gap-10 max-md:hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/feature">Feature</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>

          <button className="p-3 pl-5 pr-5 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group max-md:hidden">
            <Link href="/signin">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                <span className="text-xl font-extrabold">{">"}</span> Get
                Started
              </span>
            </Link>
          </button>

          {/* Menu */}
          

          <div className="drawer drawer-end hidden max-md:block text-2xl" onClick={toggleMenu} >
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-primary"
              >
                {isOpen ? <RxCross1 /> : <CiMenuFries />}
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-[300px] h-[60%] bg-gray-50 rounded-lg text-base-content z-50">
                {/* Sidebar content here */}
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/feature">Feature</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/signin">Sign in</a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
