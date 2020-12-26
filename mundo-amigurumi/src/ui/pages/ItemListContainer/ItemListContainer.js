import React from "react";
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return(
        <section>
            <h1>{props.greeting}</h1>
            <ItemList />
        </section>
    );
}

export default ItemListContainer;