import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Check if we're in the browser environment before accessing localStorage
  const isBrowser = typeof window !== 'undefined';
  
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState('dark');
  
  // Load theme from localStorage on initial render
  useEffect(() => {
    if (isBrowser) {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setTheme(savedTheme);
      
      // Apply theme class to document element
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isBrowser]);
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Save to localStorage
    if (isBrowser) {
      localStorage.setItem('theme', newTheme);
      
      // Apply theme class to document element
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}