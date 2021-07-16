import { createTheme, ThemeProvider } from '@material-ui/core';

import TopBar from './components/TopBar';
import themePattern from './assets/themePattern.json'

function App() {
  const theme = createTheme(themePattern);

  return (
    <ThemeProvider theme={ theme }>
      <div>
        <TopBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
