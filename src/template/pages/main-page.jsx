import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Services from "../components/services";
import Welcome from "../components/Welcome";


const MainPage = ({ servicesList }) => {
  return (
    <>
      <Welcome />
      <Services servicesList={servicesList} />  
    </>
  );
};

export default MainPage;