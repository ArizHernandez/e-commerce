import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes/index';

const theme = createTheme({
  palette: {
    primary: {
      main: '#358bfa',
      light: '#569cf7',
      '50': '#74adf8',
    },
    success: {
      main: '#32fd54',
      light: '#60fc7a',
      '50': '#7ffc94',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
