import React from 'react'
import Home from '../pages/Home/Home'
import ItemListContainer from '../pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../pages/ItemDetailContainer/ItemDetailContainer'
import {Switch,Route} from 'react-router-dom'

const main = () => {
    return (
        <>
        <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>
                <Route path='/productos' exact>
                    <ItemListContainer greeting='Hola gente.'/>

                </Route>        
                <Route path='/productos/:detailId' >
                    <ItemDetailContainer/> 
                </Route>
            </Switch>
        </>
    )
}

export default main
