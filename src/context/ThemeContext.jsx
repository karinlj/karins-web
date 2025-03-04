import { createContext, useState } from "react";

// create context
export const ThemeContext = createContext();

//create provider with state & func
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    console.log('togglemode', isDark)
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
