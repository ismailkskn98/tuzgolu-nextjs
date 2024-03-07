import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { themeChange } from '@/lib/features/themeSlice';

type ThemeToggle = {
  theme: string;
  themeToggle: () => void;
};

export const useThemeToggle = (defaultTheme: string): ThemeToggle => {
  const isBrowser = typeof window !== 'undefined';
  const [theme, setTheme] = useState<string>(isBrowser ? localStorage.getItem('theme') ?? defaultTheme : defaultTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      dispatch(themeChange('dark'));
    } else {
      document.documentElement.classList.remove('dark');
      dispatch(themeChange('light'));
    }
  }, [theme, dispatch]);

  const themeToggle = (): void => {
    const themeToggle: string = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', themeToggle);
    setTheme(themeToggle);
  };

  return { theme, themeToggle };
};
