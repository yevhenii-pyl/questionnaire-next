"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = {
  "--background": string;
  "--text-color": string;
  "--button-background": string;
  "--button-color": string;
  "--button-shadow": string;
  "--button-color-active": string;
  "--button-border": string;
  "--button-background-active": string;
};

const themes: { [key: string]: Theme } = {
  default: {
    "--background": "#fff0f0",
    "--text-color": "#333333",
    "--button-background": "#eaeef7",
    "--button-color": "#6a3aa2",
    "--button-shadow": "2px 2px 6px rgba(84, 60, 151, 0.25)",
    "--button-color-active": " #fbfbff",
    "--button-border": "1px solid #e0e0e0",
    "--button-background-active":
      "linear-gradient(176deg, rgba(20, 19, 51, 1) 17%, rgba(32, 34, 97, 1) 34%, rgba(84, 60, 151, 1) 61%,rgba(105, 57, 161, 1) 86%)",
  },
  info: {
    "--background":
      "linear-gradient(180deg, rgba(20, 19, 51, 1) 10%, rgba(32, 34, 97, 1) 30%, rgba(84, 60, 151, 1) 60%, rgba(105, 57, 161, 1) 90%)",
    "--text-color": "#fbfbff",
    "--button-background": "#fbfbff",
    "--button-color": "#6a3aa2",
    "--button-shadow": "2px 2px 6px rgba(216, 214, 214, 0.25)",
    "--button-color-active": " #fbfbff",
    "--button-border": "1px solid #e0e0e0",
    "--button-background-active":
      "linear-gradient(176deg, rgba(20, 19, 51, 1) 17%, rgba(32, 34, 97, 1) 34%, rgba(84, 60, 151, 1) 61%,rgba(105, 57, 161, 1) 86%)",
  },
};

type ThemeContextType = {
  setTheme: (topic: string) => void;
  theme: string;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState("default");

  const setTheme = (topic: string) => {
    setThemeState(themes[topic] ? topic : "default");
    const themeVars = themes[topic] || themes.default;
    Object.entries(themeVars).forEach(([key, value]) => {
      document.body.style.setProperty(key, value as string);
    });
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
