import React, { useEffect, useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import ContactUs from "./pages/ContactUs";

import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <div className="mt-12">
        <Home />
        <About />
        <Skill />
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
