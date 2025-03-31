/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./context/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable dark mode with class strategy
    theme: {
      extend: {
        colors: {
          // Custom colors that can be used in both light and dark modes
          primary: {
            light: '#f3f4f6', // light gray for light mode
            dark: '#111827', // dark gray for dark mode
          },
          secondary: {
            light: '#ffffff', // white for light mode
            dark: '#1f2937', // darker gray for dark mode
          },
        },
      },
    },
    plugins: [],
  };
  