import React from "react";
import { Button } from "../components/ui/moving-border";

const Skill = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-5 md:p-10" id="skill">
      <h1 className="text-2xl font-bold text-center ">Skills</h1>
      <div className="grid content-center grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 place-content-center ">
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">HTML</h3>
          <div className="flex justify-center overflow-hidden min-h-20 min-w-20">
            <img
              src="/images/html.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </Button>
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">CSS</h3>
          <div className="flex justify-center overflow-hidden min-h-20 min-w-20">
            <img
              src="/images/css.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </Button>
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">TAILWIND</h3>
          <div className="flex justify-center overflow-hidden min-h-28 min-w-28">
            <img
              src="/images/tailwind.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </Button>
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">JAVASCRIPT</h3>
          <div className="flex justify-center overflow-hidden min-h-28 min-w-28">
            <img
              src="/images/javascript.png"
              alt=""
              className="h-[100px] w-[100px] object-contain"
            />
          </div>
        </Button>
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">REACT</h3>
          <div className="flex justify-center overflow-hidden min-h-28 min-w-28">
            <img
              src="/images/react.png"
              alt=""
              className="h-[100px] w-[100px] object-contain"
            />
          </div>
        </Button>
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">NODE JS</h3>
          <div className="flex justify-center overflow-hidden min-h-28 min-w-28">
            <img
              src="/images/node.png"
              alt=""
              className="h-[100px] w-[100px] object-contain"
            />
          </div>
        </Button>
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">EXPRESS JS</h3>
          <div className="flex justify-center overflow-hidden min-h-28 min-w-28">
            <img
              src="/images/express.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </Button>
        <Button
          borderRadius="1rem"
          className="flex flex-col items-center text-black bg-white dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 "
        >
          <h3 className="text-lg font-semibold ">MONGO DB</h3>
          <div className="flex justify-center overflow-hidden min-h-20 min-w-20">
            <img
              src="/images/mongodb.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Skill;
