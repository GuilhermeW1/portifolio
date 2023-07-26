import { useFetcher } from '@remix-run/react';
import { createContext, useContext, useState, useMemo} from 'react';

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
};

type ThemeContextType = {
  theme: Theme,
  setTheme: (theme: Theme) => void
};

type ThemeProviderProps = {
  children: React.ReactNode,
  theme: Theme
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({children, theme}: ThemeProviderProps){
  const fetcher = useFetcher();
  const [themeInState, setThemeInState] = useState<Theme>(theme);

  const contextValue = useMemo(() => {
    const setTheme = (pref: Theme) => {
      fetcher.submit({theme: pref}, {action: 'toggle-theme', method: 'post'});
      setThemeInState(pref);
    };
    return {theme: themeInState, setTheme};
  }, [fetcher, themeInState]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(){
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export {Theme, ThemeProvider, useTheme};