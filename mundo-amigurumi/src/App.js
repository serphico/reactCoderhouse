import React from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import "fontsource-rubik";

const App = () => {
  return (<>
    <NavBar/>

    <ItemListContainer greeting='Hola gente.'/>
    <ItemDetailContainer/>

    </>);

}

export default App;
