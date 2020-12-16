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
      animation: ["group-hover", "hover"],
    },
  },
};
