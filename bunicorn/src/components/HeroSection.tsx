"use client";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/images/hero-bg.png"
import { TypewriterEffect } from "./ui/typewriter-effect";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "website",
    },
    {
      text: "with",
    },
    {
      text: "BEunicorn...",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-sky-950">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The BEunicorn is aswesome startup to handel your Social media handel and
        website...
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col justify-center items-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-sky-950 hover:bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        
        <button>
            <Link
              href="/signup"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                
                <span><FaArrowRight /></span>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                signup
              </span>
              <span className="relative invisible">Button Text</span>
            </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
