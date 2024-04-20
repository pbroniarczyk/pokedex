import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary": "#f8b179",
      "white": "#ffffff",
      "pink": "#ff49db",
      "secondary": "#2d3250",
      "secondary-500": "#424669",
      "secondary-300": "#9aa1ca",
      "type-bug": "#A7B723",
      "type-dark": "#75574C",
      "type-dragon": "#7037FF",
      "type-electric": "#F9CF30",
      "type-fairy": "#E69EAC",
      "type-fighting": "#C12239",
      "type-fire": "#F57D31",
      "type-flying": "#A891EC",
      "type-ghost": "#70559B",
      "type-normal": "#AAA67F",
      "type-grass": "#74CB48",
      "type-ground": "#DEC16B",
      "type-ice": "#9AD6DF",
      "type-poison": "#A43E9E",
      "type-psychic": "#FB5584",
      "type-rock": "#B69E31",
      "type-steel": "#B7B9D0",
      "type-water": "#6493EB",
    },
  },
};
export default config;
