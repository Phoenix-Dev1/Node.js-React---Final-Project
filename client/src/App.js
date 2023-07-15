import React, { useContext } from 'react';
import { AuthContext } from './context/authContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RegisterForm from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import RecycleBinsLocations from './pages/RecycleBinsLocations/RecycleBinsLocations';
import Recyclers from './pages/Recyclers/Recyclers';
import Route from './components/route/Route';

const App = () => {
  const { currentUser, registrationComplete } = useContext(AuthContext);

  return (
    <>
      {currentUser && <Header />}
      <Route path="/">
        {currentUser ? (
          <Home />
        ) : !registrationComplete ? (
          <Login />
        ) : (
          <RegisterForm />
        )}
      </Route>
      <Route path="/bins">
        {currentUser ? <RecycleBinsLocations /> : <Login />}
      </Route>
      <Route path="/recyclers">{currentUser ? <Recyclers /> : <Login />}</Route>
      <Footer />
    </>
  );
};

export default App;
