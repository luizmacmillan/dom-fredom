import { createTheme, ThemeProvider } from '@material-ui/core';

import themePattern from './assets/themePattern.json'
import TopBar from './components/TopBar';

function App() {
  const theme = createTheme(themePattern);

  return (
    <ThemeProvider theme={ theme }>
      <TopBar />
    </ThemeProvider>
  );
};

export default App;
