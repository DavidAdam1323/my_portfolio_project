"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-[#E4F1FF] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-green-600 ">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "David Adam Silva",
                5000, // wait 5s before replacing "David Adam Silva with next line"
                "Full-Stack Software Developer",
                5000,
                "UX/UI Designer",
                5000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#E4F1FF] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            nesciunt, eum ullam minus ducimus hic totam eaque, voluptatibus
            ipsam asperiores dolorem culpa iusto eveniet atque aspernatur
            dolorum. Ipsa, aperiam quos.
          </p>
          <div></div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500">
            Contact Info
          </button>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 hover:bg-slate-400 mt-3">
            <span className="block bg-[#27005D] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#F5F5DC] w-[310px] h-[310px] lg:w-[310px] lg:h-[310px] relative">
            <Image
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-lg shadow-white"
              src="/images/Hero-Image.png"
              alt="Hero Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
