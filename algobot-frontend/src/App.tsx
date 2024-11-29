import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme/theme';
import { RootState } from './store';
import Settings from './pages/Settings';
// Diğer gerekli importlar...

function App() {
  const isDarkMode = useSelector((state: RootState) => state.settings.general.darkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          {/* ... diğer rotalar ... */}
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;