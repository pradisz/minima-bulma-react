import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext({
  sidebarHidden: true,
  toggleSidebar: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [sidebarHidden, setSidebarHidden] = useState(true);
  const toggleSidebar = () => setSidebarHidden(!sidebarHidden);

  return <ThemeContext.Provider value={{ sidebarHidden, toggleSidebar }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const { sidebarHidden, toggleSidebar } = useContext(ThemeContext);

  return { sidebarHidden, toggleSidebar };
};

export default useTheme;
