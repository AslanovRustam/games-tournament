import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    bgGlass: "rgba(255,255,255,0.7)",
    bg: "#ffffff",
    text: "#111827",
    primary: "#2563eb",
    secondary: "#3b82f6",
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.2)",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    bgGlass: "rgba(0,0,0,0.55)",
    bg: "#0f172a",
    text: "#f9fafb",
    primary: "#60a5fa",
    secondary: "#93c5fd",
  },
  shadows: {
    sm: "0 1px 2px rgba(255,255,255,0.05)",
    md: "0 4px 6px rgba(255,255,255,0.1)",
    lg: "0 10px 15px rgba(255,255,255,0.2)",
  },
};
