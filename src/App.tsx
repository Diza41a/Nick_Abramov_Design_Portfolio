import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContext } from './contexts/global';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AnimatedCursor from './components/AnimatedCursor';
import { getCurrentTheme } from './utils/themeUtils';
import BodyContainer from './components/BodyContainer';
import { hideScrollbarOnLoading } from './utils/domUtils';

const checkIfTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const App = (): JSX.Element => {
  const currentTheme = getCurrentTheme();
  const [theme, setTheme] = useState(currentTheme);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(checkIfTouchDevice);

  useEffect(() => {
    const latestIsTouchDevice = checkIfTouchDevice();
    if (latestIsTouchDevice == isTouchDevice) return;

    setIsTouchDevice(latestIsTouchDevice);
  });

  useEffect(() => hideScrollbarOnLoading(isPageLoading), [isPageLoading]);

  return (
    <GlobalContext.Provider
      value={{
        themeState: [theme, setTheme],
        authState: [isAdminLoggedIn, setIsAdminLoggedIn],
        pageLoadingState: [isPageLoading, setIsPageLoading],
        touchDeviceState: [isTouchDevice, setIsTouchDevice],
      }}
    >
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <BodyContainer />

          {isTouchDevice ? null : <AnimatedCursor />}
        </ThemeProvider>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
