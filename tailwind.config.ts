import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    // fontSize: {
    //   base: "0.875rem",
    // },
    extend: {
      fontSize: {
        base: "0.875rem",
      },
      fontFamily: {
        sans: [
          "var(--tds-font-family-base-text)",
          "var(--tds-font-family-fallback-text)",
          ...fontFamily.sans,
        ],
      },
      fontWeight: {
        semibold: "500",
        bold: "500",
        extrabold: "500",
        black: "500",
      },
      colors: {
        background: "var(--tds-color-white)",
        foreground: "var(--tds-color-grey-20)",
        "background-container": "var(--tds-color-grey-70)",
        border: "var(--tds-color-grey-50)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
