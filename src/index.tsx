import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme} />
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
