import React, { createContext } from "react";

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});
