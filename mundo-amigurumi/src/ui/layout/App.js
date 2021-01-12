import React, {useContext} from "react";
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';
import {DbContextProvider} from "./CartContext";
import {DbContext} from './CartContext'


const App = () => {

  const {itemDb} = useContext(DbContext)

  return (
      <BrowserRouter>
          <DbContextProvider>
          <p>{itemDb}</p>

        <Header/>
        <Main/>
        <Footer/>
        </DbContextProvider>

      </BrowserRouter>

    );

}

export default App;
