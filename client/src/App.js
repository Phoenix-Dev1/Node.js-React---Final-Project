import React from 'react';
import Route from './components/route/Route';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/main/Main';
import RegisterForm from './pages/register/Register';
import Login from './pages/login/Login';

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
