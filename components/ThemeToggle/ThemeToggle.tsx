"use client";
import { useThemeMode } from "@/context/ClientProviders";

export default function ThemeToggle() {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 px-3 py-2 border rounded-md text-sm font-medium cursor-pointer transition hover:opacity-80"
    >
      {themeMode === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
