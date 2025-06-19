/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
   // Enable dark mode support
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',        // actual structure
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', 
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',     
  ],
   theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: {
          bg: "var(--card-bg)",
          tagBg: "var(--card-tag-bg)",
          tagText: "var(--card-tag-text)",
          paragraph: "var(--card-paragraph)",
        },
        headline: "var(--headline)",
        paragraph: "var(--paragraph)",
        accent: "var(--accent)",
        accentgradient: "var(--accent-gradient)"
      },
    },
  },
  plugins: [],
};
