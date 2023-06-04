import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ForceScrollToTop from './ForceScrollToTop';
import ThemeToggle from './ThemeToggle';

const getFromLocalStorage = (key) => {
  const itemInStorage = localStorage.getItem(key);
  return itemInStorage ?? null;
};

const SharedLayout = () => {
  const isDark = JSON.parse(getFromLocalStorage('isDarkMode'));
  const [isDarkMode, setDarkMode] = useState(isDark);

  const changeTheme = (event) => {
    const { checked } = event.target;
    setDarkMode(checked);
    localStorage.setItem('isDarkMode', checked);
  };

  useEffect(() => {
    if (!getFromLocalStorage('isDarkMode')) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setDarkMode(true);
      }
    }
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark-app' : ''}`}>
      <ThemeToggle changeTheme={changeTheme} isDarkMode={isDarkMode} />
      <ForceScrollToTop />
      <Outlet context={[isDarkMode, changeTheme]} />
    </div>
  );
};

export default SharedLayout;
