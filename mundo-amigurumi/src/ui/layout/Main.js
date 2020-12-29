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
                <Route path='/productos/:id' exact>
                    <ItemListContainer/>
                </Route>      
                <Route path='/productos/:id' exact>
                    <ItemListContainer/>
                </Route>      
                <Route path='/productoDetalle/:detailId' exact>
                    <ItemDetailContainer/> 
                </Route>
            </Switch>
        </>
    )
}

export default main
