import React from "react";
import './ItemListContainer.scss';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return(
        <section>
            <h1>{props.greeting}</h1>
            <ItemList />
            <ItemCount stock={5} initial={1}/>
            <Button variant="contained" color="primary" >
                 Agregar carrito
            </Button>
        </section>
    );
}

export default ItemListContainer;