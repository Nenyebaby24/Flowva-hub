// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        // Reduced time to 20s to make the movement more obvious during testing
        "marquee-left": "marqueeLeft 20s linear infinite",
        "marquee-right": "marqueeRight 20s linear infinite",
      },
    },
  },
  plugins: [],
};

