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
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% -200%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
      },
      colors: {
        background: "var(--background)",
        headline: "var(--headline)",
        paragraph: "var(--paragraph)",
        accent: "var(--accent)",
        accentgradient: "var(--accent-gradient)",
        contactCardBg: "var(--contact-card-bg)",
        card: {
          bg: "var(--card-bg)",
          tagBg: "var(--card-tag-bg)",
          tagText: "var(--card-tag-text)",
          paragraph: "var(--card-paragraph)",
        },
      },
    },
  },
  plugins: [],
};
