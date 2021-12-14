import ReactDOM from 'react-dom';

import { StoreProvider } from './store/index';

import App from './App';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
