import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      custom: ["Righteous"],
    },
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      "meteor-effect": "meteor 5s linear infinite",
      shimmer: "shimmer 2s linear infinite",
      move: "move 5s linear infinite",
      "glitch-after":
        "glitch var(--after-duration) infinite linear alternate-reverse",
      "glitch-before":
        "glitch var(--before-duration) infinite linear alternate-reverse",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
      move: {
        "0%": { transform: "translateX(-200px)" },
        "100%": { transform: "translateX(200px)" },
      },
      glitch: {
        "0%": { "clip-path": "inset(20% 0 50% 0)" },
        "5%": { "clip-path": "inset(10% 0 60% 0)" },
        "10%": { "clip-path": "inset(15% 0 55% 0)" },
        "15%": { "clip-path": "inset(25% 0 35% 0)" },
        "20%": { "clip-path": "inset(30% 0 40% 0)" },
        "25%": { "clip-path": "inset(40% 0 20% 0)" },
        "30%": { "clip-path": "inset(10% 0 60% 0)" },
        "35%": { "clip-path": "inset(15% 0 55% 0)" },
        "40%": { "clip-path": "inset(25% 0 35% 0)" },
        "45%": { "clip-path": "inset(30% 0 40% 0)" },
        "50%": { "clip-path": "inset(20% 0 50% 0)" },
        "55%": { "clip-path": "inset(10% 0 60% 0)" },
        "60%": { "clip-path": "inset(15% 0 55% 0)" },
        "65%": { "clip-path": "inset(25% 0 35% 0)" },
        "70%": { "clip-path": "inset(30% 0 40% 0)" },
        "75%": { "clip-path": "inset(40% 0 20% 0)" },
        "80%": { "clip-path": "inset(20% 0 50% 0)" },
        "85%": { "clip-path": "inset(10% 0 60% 0)" },
        "90%": { "clip-path": "inset(15% 0 55% 0)" },
        "95%": { "clip-path": "inset(25% 0 35% 0)" },
        "100%": { "clip-path": "inset(30% 0 40% 0)" },
      },
    },
    boxShadow: {
      input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
    },
  },
};
export const plugins = [addVariablesForColors];

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
