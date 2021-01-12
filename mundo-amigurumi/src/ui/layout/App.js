import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';
import {DbContextProvider} from "./CartContext";


const App = () => {



  return (
      <BrowserRouter>
          <DbContextProvider>

        <Header/>
        <Main/>
        <Footer/>
        </DbContextProvider>

      </BrowserRouter>

    );

}

export default App;
