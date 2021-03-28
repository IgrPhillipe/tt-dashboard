import React from 'react';
import GlobalStyles from './assets/themes/global';
import { DataProvider } from './dataContext';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <DataProvider>
        <GlobalStyles />
        <Home />
      </DataProvider>
    </>
  );
};

export default App;
