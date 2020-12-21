const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        "c3-orange": "#FF552C",
        "c3-teal": "#A2CAD4",
        "c3-red": "#FF0000",
        "c3-green": "#10746C",
        "c3-beige": "#F1EAE1",
        "gray-5": "#E0E0E0",
        "gray-3": "#828282",
        "gray-1": "#333333",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "flip-horizontal-bottom":
          "flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both",
      },
      keyframes: {
        "flip-horizontal-bottom": {
          "0%": {
            transform: "rotateX(0)",
          },
          to: {
            transform: "rotateX(-180deg)",
          },
        },
      },

      fontFamily: {
        sans: ["Aeonik", ...defaultTheme.fontFamily.sans],
        section: ["Solex", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
      borderStyle: ["disabled"],
      borderOpacity: ["disabled"],
      animation: ["group-hover", "hover", "active", "focus"],
    },
  },
};
