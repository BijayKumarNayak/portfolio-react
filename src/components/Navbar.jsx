import React from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className={cn("   max-w-2xl mx-auto ")}>
      <Menu>
        <Link to="home" smooth={true} duration={500}>
          <MenuItem item="Home" />
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <MenuItem item="About" />
        </Link>
        <Link to="skill" smooth={true} duration={500}>
          <MenuItem item="Skill" />
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <MenuItem item="Project" />
        </Link>
        <Link to="contactus" smooth={true} duration={500}>
          <MenuItem item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
