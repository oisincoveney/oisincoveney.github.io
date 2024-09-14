import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      dark: {
        light: "white",
        dark: "black",
        "primary-light": colors.slate[700],
        "primary-dark": colors.slate[900],
        button: colors.indigo[500],
        border: {
          button: colors.indigo[500],
        },
        "resume-icon": colors.slate[100],
        "nav-primary": colors.slate["800"],
        "nav-secondary": colors.slate["700"],
        tech: {
          fe: colors.sky[400],
          "fe-framework": colors.sky[600],
          "fe-library": colors.sky[800],
          "be-framework": colors.violet[400],
          db: colors.slate[500],
          dev: colors.indigo[500],
        },
      },
      sunset: {
        light: colors.slate[800],
        dark: "black",
        "primary-light": colors.yellow[300],
        "primary-dark": colors.orange[300],
        button: colors.amber[200],
        border: {
          button: colors.amber[500],
        },
        "resume-icon": colors.slate[100],
        "nav-primary": colors.orange[100],
        "nav-secondary": colors.orange[200],
        tech: {
          fe: colors.orange[200],
          "fe-framework": colors.orange[100],
          "fe-library": colors.orange[50],
          "be-framework": colors.red[300],
          db: colors.yellow[200],
          dev: colors.yellow[100],
        },
      },
      light: {
        light: colors.black,
        dark: colors.white,
        "primary-light": colors.white,
        "primary-dark": colors.white,
        button: colors.slate[700],
        text: {
          button: colors.white
        },
        "resume-icon": colors.slate[100],
        "nav-primary": colors.slate[100],
        "nav-secondary": colors.slate[200],
        tech: {
          fe: colors.blue[200],
          "fe-framework": colors.blue[100],
          "fe-library": colors.blue[50],
          "be-framework": colors.purple[300],
          db: colors.gray[200],
          dev: colors.gray[100],
        },
      },
    }),
  ],
};
