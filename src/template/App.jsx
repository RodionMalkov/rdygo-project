import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

import MainPage from './pages/main-page';


const App = () => {
  return (
    <MainPage />    
  );
};

export default App;
