import React from "react";
import './ItemListContainer.scss';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return(
        <section>
            <h1>{props.greeting}</h1>
            <div id='Items'>
            <ItemList />
            </div>

        </section>
    );
}

export default ItemListContainer;