import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#03A9F4",
        secondary: "#059BE0",
      },
    },
  },
  plugins: [],
} satisfies Config;
