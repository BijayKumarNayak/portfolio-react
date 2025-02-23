import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white shadow-md bg-gray-950">
      <div className="flex items-center justify-between px-5 py-4 mx-auto max-w-7xl ">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bijay Nayak
        </motion.h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        <motion.ul
          className={`md:flex space-x-5 hidden text-lg`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-base transition duration-300 cursor-pointer hover:text-cyan-500"
              >
                <a href={`#${link.replace(/ /g, "")}`}>{link}</a>
              </motion.li>
            )
          )}
        </motion.ul>
      </div>
      {isOpen && (
        <motion.div
          className="flex flex-col items-center py-4 space-y-4 bg-gray-800 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (link, index) => (
              <motion.a
                key={index}
                href={`#${link.replace(/ /g, "")}`}
                className="text-lg text-white transition duration-300 hover:bg-cyan-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </motion.a>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
