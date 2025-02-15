import React, { useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";

const projectsData = [
  {
    link: "https://moviex-sigma.vercel.app/",
    image: "/images/moviex.png",
  },
  {
    link: "https://estate-peach-tau.vercel.app/",
    image: "/images/estate.png",
  },
  {
    link: "https://gemini-clone-alpha.vercel.app/",
    image: "/images/gemini.png",
  },
  {
    link: "https://incredible-rugelach-044202.netlify.app/",
    image: "/images/landingpage.png",
  },

  {
    link: "https://game-landing-page-eight.vercel.app/",
    image: "/images/game-landing-page.png",
  },
  {
    link: "https://url-shortener-landing-page-two.vercel.app/",
    image: "/images/url-shortener.png",
  },
];
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-10 lg:p-10 md:p-5"
      id="project"
    >
      <h1 className="text-2xl font-bold text-center">Projects</h1>
      <div className="max-w-5xl px-8 mx-auto">
        <HoverEffect items={projectsData} />
      </div>
    </div>
  );
};

export default Projects;
