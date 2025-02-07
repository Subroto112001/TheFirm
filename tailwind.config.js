/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowcolor: "var(--yellowcolor)",
        blackcolorText: "var(--blackcolorText)",
        graycolorBack: "var(--graycolorBack)",
        SecondGrayback: "var(--SecondGrayback)",
        White: "var(--White)",
      },
      fontFamily: {
        Nunito: "var(--nunito)",
        Lora: "var(--Lora)",
      },
      backgroundImage: {
        bannerBackImage: "url('/src/assets/BannerBack.png')",
        
      },
    },
  },
  plugins: [],
};
