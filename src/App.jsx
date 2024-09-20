import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import ContactUs from "./pages/ContactUs";

import Projects from "./pages/Projects";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Toggle dark mode class on body based on state
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save the user's preference
    }
  }, [darkMode]);
  return (
    <div className="overflow-hidden text-white bg-black ">
      <Home />
      <div className="w-full h-1 opacity-50 bg-zinc-700"></div>
      <About />
      <div className="w-full h-1 opacity-50 bg-zinc-700"></div>

      <Skill />
      <div className="w-full h-1 opacity-50 bg-zinc-700"></div>

      <Projects />
      <div className="w-full h-1 opacity-50 bg-zinc-700"></div>

      <ContactUs />
    </div>
  );
};

export default App;
