import React, { useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { motion } from "framer-motion";

const projectsData = [
   {
    link: "https://forever-frontend-eight-ashen.vercel.app/",
    image: "/images/forever.png",
  },
  {
    link: "https://moviex-sigma.vercel.app/",
    image: "/images/moviex.webp",
  },
  {
    link: "https://estate-peach-tau.vercel.app/",
    image: "/images/estate.webp",
  },
  
  {
    link: "https://incredible-rugelach-044202.netlify.app/",
    image: "/images/landingpage.webp",
  },

  {
    link: "https://game-landing-page-eight.vercel.app/",
    image: "/images/game-landing-page.webp",
  },
  {
    link: "https://url-shortener-landing-page-two.vercel.app/",
    image: "/images/url-shortener.png",
  },
];
const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center gap-5 p-5 md:p-10 scroll-mt-20 "
      id="Projects"
    >
      <h1 className="text-4xl font-bold text-center">Proj<span className="text-cyan-300">ects</span> </h1>
      <div className="max-w-5xl px-8 mx-auto">
        <HoverEffect items={projectsData} />
      </div>
    </motion.div>
  );
};

export default Projects;
