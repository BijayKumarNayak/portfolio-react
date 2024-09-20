import React from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Spotlight } from "../components/ui/Spotlight";
import { Meteors } from "../components/ui/meteors";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";

const Home = () => {
  const words = [
    {
      text: "Hi",
    },
    { text: "I" },
    { text: "Am" },

    {
      text: " BIJAY",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const words2 = [
    {
      text: "Frontend",
      className: "text-blue-500 dark:text-blue-500",
    },

    {
      text: "Developer",
    },
  ];
  return (
    <div className="h-full overflow-hidden lg:h-screen ">
      <Navbar />
      <div
        className="flex flex-col-reverse items-center justify-center sm:px-2 lg:px-10 md:flex-row"
        id="home"
      >
        <Spotlight
          className="left-0 -top-40 md:left-60 md:-top-20"
          fill="white"
        />
        <Meteors number={20} className="hidden md:block" />
        <div className="w-full px-5 md:px-0 md:w-1/2">
          <TypewriterEffectSmooth words={words} className="text-center" />
          <TypewriterEffectSmooth words={words2} />
          <div className="flex items-center gap-4 my-5 md:my-0">
            <a href="#" target="_blank">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Resume
              </button>
            </a>

            <Link to="contactus" smooth={true} duration={500}>
              <div>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Contact Me
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="md:p-10 md:w-1/2">
          <div className="flex justify-center object-cover w-full h-full overflow-hidden rounded-md">
            <img src="/images/student.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
