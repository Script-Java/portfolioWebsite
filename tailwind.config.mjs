/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': `linear-gradient(90deg, oklch(var(--s)) 4%, color-mix(in oklch, oklch(var(--s)), oklch(var(--er))) 22%, oklch(var(--p)) 45%, color-mix(in oklch, oklch(var(--p)), oklch(var(--a))) 67%, oklch(var(--a)) 100.2%)`,
      },
      
    },
  },
  plugins: [require('daisyui'),],
};
