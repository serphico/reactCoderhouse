import React from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Home from "./components/Home/Home";
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import "fontsource-rubik";

const App = () => {
  return (<BrowserRouter>

      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/productos'>
          <ItemListContainer greeting='Hola gente.'/>
          <Route path='/productos'>
            <ItemListContainer greeting='Hola gente.'/>
          </Route>
        </Route>

      </Switch>
    </BrowserRouter>);

}

export default App;
