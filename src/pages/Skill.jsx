import React from "react";

import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center w-full gap-10 px-5 py-5 md:py-5 lg:py-10 md:px-10 lg:px-12 lg:max-h-screen"
      id="Skills"
    >
      <h1 className="text-4xl font-bold text-center ">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex items-center flex-1 w-full gap-2 px-3 py-2 md:w1/2">
            <div className="w-12 h-12 overflow-hidden rounded-md">
              <img
                src="/images/html.png"
                alt="html image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  HTML
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  100%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-1 w-full gap-2 px-3 py-2 md:w1/2">
            <div className="w-12 h-12 overflow-hidden rounded-md">
              <img
                src="/images/css.png"
                alt="css image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  CSS
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  100%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex items-center flex-1 w-full gap-2 px-3 py-2 md:w1/2">
            <div className="w-12 h-12 overflow-hidden rounded-md">
              <img
                src="/images/javascript.png"
                alt="js image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  JavaScript
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  90%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 w-full gap-2 px-3 py-2 md:w1/2">
            <div className="w-12 h-12 overflow-hidden rounded-md">
              <img
                src="/images/react.png"
                alt="react image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  React JS
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  90%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex items-center flex-1 w-full gap-2 px-3 py-2 md:w1/2">
            <div className="w-12 h-12 overflow-hidden rounded-md">
              <img
                src="/images/node.png"
                alt="noge image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Node JS
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  55%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-1 w-full gap-2 px-3 py-2 md:w1/2">
            <div className="w-12 h-12 overflow-hidden rounded-md">
              <img
                src="/images/mongodb.png"
                alt="mongodb image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  MongoDB
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  65%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
