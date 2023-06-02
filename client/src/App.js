import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Header heading="Books" />
      <Main />
      <Footer classRoom="47-2" />
    </>
  );
}

export default App;
