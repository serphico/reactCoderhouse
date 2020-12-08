import React from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import "fontsource-rubik";

const App = () => {
  return (<>
    <NavBar/>
    
    <ItemListContainer greeting='Hola gente.'/>
    </>);

}

export default App;
