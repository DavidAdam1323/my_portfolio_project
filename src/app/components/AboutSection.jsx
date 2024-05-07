"use client";
import React, { useTransition, useState, startTransition } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/About-Image.png"
          alt="About Image"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate Full-Stack Software Developer dedicated to
            creating engaging and user-friendly Web Applications. With hands-on
            experience in JavaScript, React, Next.js, Node.js, PostgreSQL, HTML,
            CSS, and Git, I possess a strong foundation in modern web
            development technologies. Driven by a thirst for knowledge, I
            actively seek opportunities to broaden my skill set and stay updated
            with industry trends. I embrace challenges as learning opportunities
            and continuously strive for excellence in my work. As a
            collaborative team player, I thrive in environments where creativity
            and innovation flourish. I am excited about the prospect of
            collaborating with like-minded individuals to bring imaginative
            ideas to life through exceptional applications.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              Skills
            </span>
            <span>Experience</span>
            <span>Education</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
