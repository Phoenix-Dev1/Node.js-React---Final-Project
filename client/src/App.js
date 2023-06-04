import React, { useContext } from 'react';
import { AuthContext } from './context/authContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import RegisterForm from './pages/register/Register';
import Login from './pages/login/Login';

const App = () => {
  const { currentUser, registrationComplete } = useContext(AuthContext);

  return (
    <>
      {currentUser ? (
        <>
          <Header />
          <Home />
        </>
      ) : (
        <>{!registrationComplete ? <Login /> : <RegisterForm />}</>
      )}
      <Footer />
    </>
  );
};

export default App;
