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
    },
  },
};
export default config;
