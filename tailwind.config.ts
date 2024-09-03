import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sky: "#C3EBFA",
        skyLight: "#EDF9FD",
        skyPurple: "#CFCEFF",
        skyPurpleLight: "#F1F0FF",
        skyYellow: "#FAE27C",
        skyYellowLight: "#FEFCEB",
      },
    },
  },
  plugins: [],
};
export default config;
