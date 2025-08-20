import React from "react";

import { motion } from "framer-motion";
import { Button } from "../components/ui/moving-border";

const Home = () => {
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
    <div
      className="flex items-center justify-center h-full p-5 mt-16 overflow-hidden md:p-10 "
      id="Home"
    >
      <div className="flex flex-col-reverse items-center justify-center m-auto md:flex-row">
        <div className="w-full px-5 md:px-0 md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 text-4xl font-bold tracking-wider text-center md:text-5xl lg:text-6xl font-custom md:text-left"
          >
            Hello I'm <span className="text-cyan-500">Bijay</span>
          </motion.h1>
          <motion.p
            className="mb-6 text-lg text-center text-gray-300 md:text-3xl md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Crafting Modern, Responsive, and Interactive Web Experiences.
          </motion.p>

          <div className="flex items-center justify-center gap-4 my-5 md:justify-start md:my-0">
            <a href="#" target="_blank">
              <Button
              onClick={handleDownload}
                borderRadius="1.75rem"
                className="px-8 py-2 text-black bg-white rounded-full dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 font-custom"
              >
                Download Resume
              </Button>
            </a>

            
              <a href="#Contact">
                <Button
                  borderRadius="1.75rem"
                  className="px-8 py-2 text-black bg-white rounded-full dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Contact Me
                </Button>
              </a>
           
          </div>
        </div>
        <div className="md:p-10 md:w-1/2">
          <div className="flex justify-center object-cover w-full h-full overflow-hidden rounded-md ">
            <img src="/images/student.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden "></div>
    </div>
  );
};

export default Home;
