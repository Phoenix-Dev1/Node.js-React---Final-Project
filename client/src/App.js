import React from 'react';
import Route from './components/route/Route';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import RegisterForm from './components/register/Register';
import Login from './components/login/Login';

const App = () => {
  return (
    <>
      <Header />
      <Route path="/">
        <Main />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Footer />
    </>
  );
};

export default App;
