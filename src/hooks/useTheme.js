import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export default function useTheme() {
  const { currentTheme, changeTheme } = useContext(ThemeContext);
  return { currentTheme, changeTheme };
}
