import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-[#E4F1FF] mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm David Adam{" "}
          </h1>
          <p className="text-[#E4F1FF] text-lg mb-6 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            nesciunt, eum ullam minus ducimus hic totam eaque, voluptatibus
            ipsam asperiores dolorem culpa iusto eveniet atque aspernatur
            dolorum. Ipsa, aperiam quos.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#9400FF] w-[310px] h-[310px] lg:w-[350px] lg:h-[350px] relative">
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
