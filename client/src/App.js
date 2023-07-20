import React, { useContext } from 'react';
import { AuthContext } from './context/authContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import Home from './pages/home/Home';
import RecycleBinsLocations from './pages/RecycleBinsLocations/RecycleBinsLocations';
import Route from './components/route/Route';

const App = () => {
  const { currentUser, registrationComplete } = useContext(AuthContext);

  return (
    <>
      {currentUser && <Header />}
      <Route path="/">
        {currentUser ? ( // If the usee logged in
          <Home />
        ) : !registrationComplete ? ( // if registration completed
          <LoginRegister />
        ) : (
          <LoginRegister />
        )}
      </Route>
      <Route path="/bins">
        {currentUser ? <RecycleBinsLocations /> : <LoginRegister />}
      </Route>
      <Footer />
    </>
  );
};

export default App;
