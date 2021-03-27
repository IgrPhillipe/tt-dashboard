import React from 'react';
import GlobalStyles from './assets/themes/global';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;
