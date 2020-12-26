import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';


const App = () => {
  return (<BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>);

}

export default App;