/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hyuil: "url('/public/img/hyuil.webp')",
      },
      fontFamily: {
        primary: ["Nunito", "Noto Sans KR"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two"],
    }),
    require("@tailwindcss/typography"),
  ],
};
