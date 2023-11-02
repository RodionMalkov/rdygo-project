import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/main-page';


const App = ({ servicesList}) => {
  return (
    <>
      <Header />
      <main className='page__content container'>
        <MainPage servicesList={servicesList} />
      </main>
      <Footer />
    </>
  );
};

export default App;
