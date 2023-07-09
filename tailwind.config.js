module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        pink: { "600_0c": "#cc2b5e0c", "100_0c": "#ffafbd0c" },
        deep_orange: { 200: "#ffb88c", A200: "#ec7532" },
        blue: { A400: "#1877f2" },
        gray: {
          400: "#b8b8b8",
          900: "#0f131e",
          "900_99": "#13172299",
          "900_02": "#131722",
          "900_03": "#10141f",
          "900_04": "#111520",
          "200_19": "#eeeeee19",
          "900_05": "#121621",
          "900_99_01": "#0f131e99",
          "900_01": "#061538",
        },
        light_blue: { 400: "#24baef", "400_19": "#24baef19" },
        teal: { "400_0c": "#2193b00c", A700_0c: "#06beb60c" },
        yellow: { 600: "#e6cd3b" },
        white: {
          A700_19: "#ffffff19",
          A700_4c: "#ffffff4c",
          A700_66: "#ffffff66",
          A700: "#ffffff",
        },
        blue_gray: {
          100: "#d9d9d9",
          200: "#b9bdcc",
          300: "#9aa5b3",
          900: "#333333",
          "800_0c": "#42275a0c",
          "200_4c": "#b9bdcc4c",
        },
        red: {
          "200_0c": "#ee9ca70c",
          "300_0c": "#de62620c",
          "600_0c": "#eb33490c",
        },
        light_green: { "700_0c": "#56ab2f0c" },
      },
      fontFamily: {
        jost: "Jost",
        dosis: "Dosis",
        icofont: "IcoFont",
        montserrat: "Montserrat",
        opensans: "Open Sans",
        rubik: "Rubik",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(135deg ,#ffafbd0c,#2193b00c,#cc2b5e0c,#ee9ca70c,#42275a0c,#de62620c,#06beb60c,#eb33490c,#56ab2f0c)",
        gradient1: "linear-gradient(180deg ,#13172299,#0f131e99)",
        gradient2: "linear-gradient(180deg ,#ec7532,#ffb88c)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
