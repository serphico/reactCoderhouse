import React from "react";
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';
import {DbContextProvider} from "./ProductContext";
import {CartContextPrivider} from "./CartContext"
import './App.scss'


const App = () => {

  return (
      <BrowserRouter>
          <DbContextProvider>
            <CartContextPrivider>
            <Header/>
            <Main/>
            <Footer/>
          </CartContextPrivider>
        </DbContextProvider>

      </BrowserRouter>

    );

}

export default App;
