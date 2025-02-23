import React from "react";
import { motion } from "framer-motion";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";

import { Button } from "../components/ui/moving-border";
const words = `Hello, I'm BIJAY KUMAR NAYAK, a passionate frontend developer with a strong foundation in HTML, CSS, and modern frameworks like Tailwind, React, Redux, and Node.js. Through hands-on experience and dedicated learning, I've honed my skills to craft dynamic and visually appealing web applications.`;
const About = () => {
  const handleDownload = () => {
    const resumeUrl = "../../public/resume/Bijay_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Bijay_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="About"
      className="container w-full px-5 py-5 md:py-5 lg:py-10 md:px-10 lg:px-12 lg:max-h-screen"
    >
      <div className="grid items-center grid-cols-1 md:grid-cols-2 ">
        <div className="relative flex justify-center h-auto mx-auto overflow-hidden border rounded-lg w-60">
          <img
            src="/images/avartar3.webp"
            alt=""
            className="object-contain object-center w-full h-full "
          />
        </div>
        <div className="my-5 text-center md:mb-0 md:text-left">
          <h1 className="text-4xl font-bold">
            About <span className=" text-cyan-300">Me</span>
          </h1>
          <TextGenerateEffect words={words} />
          <div className="my-5">
            <Button
              onClick={handleDownload}
              borderRadius="1.75rem"
              className="px-8 py-2 text-black bg-white rounded-full dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
