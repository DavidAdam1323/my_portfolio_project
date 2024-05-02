import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-[#E4F1FF] mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm David Adam{" "}
          </h1>
          <p className="text-[#E4F1FF] text-lg lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
            nesciunt, eum ullam minus ducimus hic totam eaque, voluptatibus
            ipsam asperiores dolorem culpa iusto eveniet atque aspernatur
            dolorum. Ipsa, aperiam quos.
          </p>
        </div>
        <div className="col-span-5"></div>
      </div>
    </section>
  );
};

export default HeroSection;
