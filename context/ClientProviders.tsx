"use client";
import {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import { lightTheme, darkTheme } from "@/styles/theme";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeMode must be used within ThemeContextProvider");
  return context;
};

export function ClientProviders({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const applyCssVars = (mode: ThemeMode) => {
    const theme = mode === "light" ? lightTheme : darkTheme;
    const root = document.documentElement;

    root.style.setProperty("--background", theme.colors.bg);
    root.style.setProperty("--foreground", theme.colors.text);
    root.style.setProperty("--secondary-text", theme.colors.secondary);
  };

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as ThemeMode) || "light";
    setThemeMode(saved);
    applyCssVars(saved);
  }, []);

  const toggleTheme = () => {
    setThemeMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      applyCssVars(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        {children}
        {modal}
        <Toaster />
        <ThemeToggle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
