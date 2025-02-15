import React from "react";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";
const words = `Hello, I'm BIJAY KUMAR NAYAK, a passionate frontend developer with a strong foundation in HTML, CSS, and modern frameworks like Tailwind, React, Redux, and Node.js. Through hands-on experience and dedicated learning, I've honed my skills to craft dynamic and visually appealing web applications.`;
const About = () => {
  return (
    <div id="about" className="w-full p-5 lg:min-h-screen">
      <h1 className="text-2xl font-bold text-center">About</h1>
      <div className="grid items-center grid-cols-1 md:grid-cols-2">
        <div className="relative flex justify-center p-3 overflow-hidden ">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 z-0 "
          >
            <path
              fill="#08BDBA"
              d="M43.1,-61.5C48.4,-55.6,39.9,-32.9,42.9,-15.8C46,1.4,60.6,12.9,60.5,21.7C60.5,30.6,45.8,36.7,33.3,38.5C20.7,40.3,10.4,37.9,-3,42C-16.4,46.1,-32.7,56.9,-47.5,55.8C-62.2,54.6,-75.3,41.7,-76.6,27.4C-77.8,13,-67.1,-2.6,-60.5,-18.6C-53.8,-34.5,-51.1,-50.6,-41.7,-55.1C-32.3,-59.7,-16.2,-52.7,1.4,-54.6C19,-56.5,37.9,-67.4,43.1,-61.5Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            src="../../public/images/avatar2.png"
            alt=""
            className="z-50 h-96 "
          />
        </div>
        <div className="mb-5 md:mb-0 ">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </div>
  );
};

export default About;
