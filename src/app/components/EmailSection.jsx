import React from "react";
import GitHubIcon from "../../../public/github-white-icon.png";
import LinkedInIcon from "../../../public/linkedin-white-icon.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          {" "}
          I am currently exploring new opportunities and my inbox is always open
          for any communication. Whether you have a query, wish to connect, or
          simply want to say hello, please feel free to reach out. I am
          dedicated to responding promptly and engaging with you in a meaningful
          way.
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/DavidAdam1323">
            <Image src={GitHubIcon} alt="GitHub Icon" className="w-8 h-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/davidadamsilva/">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-white">
            Your e-mail
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="example@email.com"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
