import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
const words = `Hello, I'm BIJAY KUMAR NAYAK, a passionate frontend developer with a strong foundation in HTML, CSS, and modern frameworks like Tailwind, React, Redux, and Node.js. Through hands-on experience and dedicated learning, I've honed my skills to craft dynamic and visually appealing web applications.`;
const About = () => {
  return (
    <div id="about">
      <BackgroundBeamsWithCollision className="px-10 ">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="p-3 overflow-hidden ">
            <img
              src="/images/avatar.png"
              alt=""
              className="h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] rounded-full border-sky-500 border-2  m-auto "
            />
          </div>
          <div className="mb-5 md:mb-0 ">
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default About;
