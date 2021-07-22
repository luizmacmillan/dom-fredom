import { createTheme, ThemeProvider } from '@material-ui/core';

import themePattern from './assets/themePattern.json'
import TopBar from './components/TopBar';
import Router from './Router';

function App() {
  const theme = createTheme(themePattern);

  return (
    <ThemeProvider theme={ theme }>
      <TopBar />
      <Router />
    </ThemeProvider>
  );
};

export default App;
