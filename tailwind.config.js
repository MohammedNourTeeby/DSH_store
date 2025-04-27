// tailwind.config.mjs
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#007BFF",
          600: "#0056D2",
          700: "#003BB5",
        },
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
};
