import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Services from "../components/services";


const MainPage = ({ servicesList }) => {
  return (
    <>
      <div className="container">
        <Services servicesList={servicesList} />
      </div>    
    </>
  );
};

export default MainPage;