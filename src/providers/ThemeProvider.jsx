import { useState } from "react";
import { createContext, useEffect } from "react";

const htmlElement = document.querySelector("html");

const updateTheme = theme => {
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("current-theme", theme);
};

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const theme = localStorage.getItem("current-theme");
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    if (currentTheme) {
      htmlElement.setAttribute("data-theme", currentTheme);
    } else {
      changeTheme("light");
    }
  }, []);

  const changeTheme = theme => {
    updateTheme(theme);
    setCurrentTheme(theme);
  };

  const value = { changeTheme, currentTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
